// src/app/layout.tsx
export const metadata = {
  title: "My Portfolio",
  description: 'Welcome to my portfolio website.',
  keywords: ['portfolio', 'web developer', 'projects', 'Next.js'],
  authors: [{ name: 'Virakboth Soth' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}