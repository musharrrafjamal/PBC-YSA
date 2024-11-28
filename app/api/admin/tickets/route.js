import connectMongoDB from "@/libs/mongodb";
import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 10;
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "newest";
  const status = searchParams.get("status") || "all";

  try {
    let query = {};

    if (status === "resolved") {
      query.status = "resolved";
    } else if (status === "unresolved") {
      query.status = { $ne: "resolved" };
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { issue: { $regex: search, $options: "i" } },
      ];
    }

    let sortQuery = {};
    switch (sortBy) {
      case "newest":
        sortQuery = { createdAt: -1 };
        break;
      case "oldest":
        sortQuery = { createdAt: 1 };
        break;
      case "nameAsc":
        sortQuery = { name: 1 };
        break;
      case "nameDesc":
        sortQuery = { name: -1 };
        break;
      default:
        sortQuery = { createdAt: -1 };
    }

    const skip = (page - 1) * limit;

    await connectMongoDB();

    const totalTickets = await Ticket.countDocuments(query);

    const tickets = await Ticket.find(query)
      .sort(sortQuery)
      .skip(skip)
      .limit(Number(limit));

    return NextResponse.json({
      success: true,
      message: "Tickets fetched successfully",
      tickets,
      totalPages: Math.ceil(totalTickets / limit),
      currentPage: Number(page),
      totalTickets,
    });
  } catch (error) {
    console.log("Error fetching tickets:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch tickets" },
      { status: 500 }
    );
  }
}