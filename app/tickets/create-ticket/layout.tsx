import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "create ticket",
  description: "create ticket page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
