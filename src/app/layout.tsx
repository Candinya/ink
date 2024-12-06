import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "寻喵之旅",
  description: "循此前行，终至尘星",
  authors: {
    name: "Nya Candy",
    url: "https://ncd.moe",
  },
  creator: "Nya Candy",
};

export const viewport: Viewport = {
  themeColor: "#62b6e7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
