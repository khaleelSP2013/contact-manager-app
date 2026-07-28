import type { Metadata } from "next";
import "./globals.css";
import NavbarComponent from "./_components/NavbarComponent";

export const metadata: Metadata = {
  title: "Contact Manager",
  description: "Simple Contact Manager App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-gray-50">
          <NavbarComponent />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
