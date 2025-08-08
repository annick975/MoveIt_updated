import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Move It",
  description: "Your prior task manager",
};

// This layout only applies to the root redirect page
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
