import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Montask | Монголд зориулсан freelance workflow",
  description:
    "Montask нь компани болон фрилансерийг нэг цэвэр workflow-д авчирч, ажлаа нийтлэхээс match хийх, хамтралаа эхлүүлэх хүртэлх урсгалыг илүү ойлгомжтой болгоно.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mn"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-[var(--ink)]">
        {children}
      </body>
    </html>
  );
}
