import connectMongoDB from "@/libs/mongodb";
import Booking from "@/models/booking";
import User from "@/models/users";
import { NextResponse } from "next/server";

const handleSendNotification = async (token, link) => {
  if (!token) {
    console.error("No token available for notifications");
    return;
  }
  const response = await fetch(
    `${process.env.PHONEPE_REDIRECT_URL}/api/send-notification`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
        title: "Service accepted!",
        message: "See details...",
        link,
      }),
    }
  );

  await response.json();
};

export async function POST(request) {
  try {
    await connectMongoDB(); // Ensure MongoDB connection is established

    const { bookingId, serviceProvider } = await request.json();

    const booking = await Booking.findById(bookingId);

    const providersToEliminate = booking.availableServiceProviders.filter(
      (sp) => {
        return sp !== serviceProvider._id;
      }
    );

    if (!booking) {
      return NextResponse.json("Invalid booking ID", { status: 404 });
    }

    if (booking.acceptedByServiceProvider) {
      return NextResponse.json(
        {
          success: false,
          message: "Service has been accepted by another service provider!",
          acceptedByAnotherServiceProvider: true,
        },
        { status: 200 }
      );
    }
    if (providersToEliminate.length > 0) {
      providersToEliminate.map(async (sp) => {
        await User.findByIdAndUpdate(sp, { $pull: { bookings: bookingId } });
      });
    }
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      {
        acceptedByServiceProvider: true,
        assignedServiceProviders: serviceProvider,
        status: `${serviceProvider.name} is assigned!`,
        availableServiceProviders: [serviceProvider._id],
        access: [serviceProvider._id],
      },
      { new: true }
    ).populate("user");

    const user = await User.findOne({
      phoneNumber: booking.phoneNumber,
    });
    if (user) {
      handleSendNotification(
        user.notificationToken,
        `/user/bookings/${bookingId}`
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Bookings updated successfully",
        booking: updatedBooking,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error updating bookings:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update bookings" },
      { status: 500 }
    );
  }
}
