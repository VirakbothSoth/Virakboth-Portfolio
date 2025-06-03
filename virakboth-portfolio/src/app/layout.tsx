// /src/app/layout.tsx
export const metadata = {
  title: "My Portfolio",
  description: "A Next.js-powered portfolio site",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}