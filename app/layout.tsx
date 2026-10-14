import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayes Intelligence | AI-Native Hedge Fund",
  description:
    "Built to compete beyond our size. Bayes Intelligence is building an AI-native long/short fund focused on AI infrastructure, combining research at scale with disciplined risk management.",
  icons: {
    icon: "/bayes-intelligence-mark.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
