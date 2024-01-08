import "./global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TikTok Unwrapped",
  description: "TikTok Unwrapped 2024",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
