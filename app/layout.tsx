import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md Saqib Shakil | Full Stack Developer · AI Engineer · Digital Creator",
  description:
    "Portfolio of MD Saqib Shakil — Operations and Systems Professional with 2+ years in CRM operations, " +
    "supplier coordination, booking workflows and business process automation. Based in Kolkata, India.",
  keywords: [
    "Saqib Shakil", "Full Stack Developer", "AI Engineer", "Angular Developer",
    "Node.js", "LLM Integration", "n8n Automation", "WhatsApp Business API",
    "Social Media Marketing", "Kolkata Developer", "Freelance Developer India",
    "Operations Coordinator", "Supply Chain Operations", "CRM Operations",
    "Supplier Coordination", "Booking Operations", "Workflow Automation",
    "Business Process Management", "Travel Operations", "Sanchara World",
    "Sunflower Trip",
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

