import "./globals.css";

export const metadata = {
  title: "Portfolio Faniry Navalona",
  description: "Portfolio Faniry Navalona",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
