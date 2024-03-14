import "./globals.css";

export const metadata = {
  title: "Portfolio Faniry Navalona",
  description: "Portfolio Faniry Navalona",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="bg-gray-200">{children}</body>
    </html>
  );
}
