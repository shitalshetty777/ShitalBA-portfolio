import "./globals.css"

export const metadata = {
  title: "Shital Krishna Shetty Portfolio",
  description: "Business Analyst Portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
