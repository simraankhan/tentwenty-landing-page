import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  src: "../fonts/WorkSans-Regular.ttf",
  style: "normal",
  weight: "400",
  variable: "--font-work-sans",
})


export const metadata: Metadata = {
  title: "TenTwenty Landing Page",
  description: "TwenTwenty | Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
