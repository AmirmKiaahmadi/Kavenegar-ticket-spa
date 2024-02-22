import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "tickets",
  description: "tickets page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
