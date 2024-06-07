import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import  SessionProvider  from "@/components/SessionProvider";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { cn } from "@/lib/utils"
import { IconContext } from "react-icons";






const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Start tracking your expense today with expense tracker and learn how to do it right",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)


  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background dark font-sans antialiased",
          fontSans.variable
        )}>
        <SessionProvider session={session}>

        {children}

        </SessionProvider>
        
        </body>
    </html>
  );
}
