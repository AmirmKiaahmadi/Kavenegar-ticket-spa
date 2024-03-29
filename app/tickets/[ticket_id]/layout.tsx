import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ticket",
  description: "ticket page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className=" mx-6">{children}</div>;
}
