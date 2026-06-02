import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md Saqib Shakil | Full Stack Developer · AI Engineer · Digital Creator",
  description:
    "Portfolio of Md Saqib Shakil — Full Stack Developer and AI Engineer from " +
    "Kolkata, India. 2+ years building production platforms, AI integrations, " +
    "WhatsApp automation bots, and digital marketing campaigns for real businesses.",
  keywords: [
    "Saqib Shakil", "Full Stack Developer", "AI Engineer", "Angular Developer",
    "Node.js", "LLM Integration", "n8n Automation", "WhatsApp Business API",
    "Social Media Marketing", "Kolkata Developer", "Freelance Developer India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

