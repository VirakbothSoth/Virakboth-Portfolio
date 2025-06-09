// src/app/layout.tsx
export const metadata = {
  icons: {
    icon: '/favicon.ico'
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My Portfolio</title>
        <meta property="og:title" content="Virakboth's Portfolio" />
        <meta property="og:description" content="This is Virakboth's Portfolio" />
        <meta name="keywords" content="Virakboth, Virakboth Soth" />
        <meta name="author" content="Virakboth Soth" />
      </head>
      <body>{children}</body>
    </html>
  );
}