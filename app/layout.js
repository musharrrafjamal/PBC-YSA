import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import ReduxProvider from "@/provider/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yourserviceapp",
  description: "Find the best service at Yourserviceapp",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <Toaster position="bottom-right" richColors />
        <ReduxProvider>
          <Nav />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}