// src/app/layout.tsx
export const metadata = {
  title: 'My Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
  meta: {
    title: "Virakboth's Portfolio",
    description: 'Welcome to my portfolio website.',
    keywords: ['portfolio', 'web developer', 'projects', 'Next.js'],
    author: 'Virakboth Soth',
    viewport: 'width=device-width, initial-scale=1',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}