import { Poppins } from "next/font/google"; // Import Poppins font
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export const metadata = {
  title: "Nixxe Attendence",
  description: "Created by Nixxe System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
