"use client";
import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("./page"), { ssr: false });
import "./globals.css";
export default function RootLayout() {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <NoSSR />
      </body>
    </html>
  );
}
