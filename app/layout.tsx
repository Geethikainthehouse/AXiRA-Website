import type React from "react"
import "./globals.css"
import { Manrope, Montserrat } from "next/font/google"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata = {
  title: "AXiRA - Graphene Oxide Technology",
  description: "Revolutionizing water filtration with Graphene Oxide technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${montserrat.variable}`}>{children}</body>
    </html>
  )
}
