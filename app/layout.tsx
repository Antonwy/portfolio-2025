import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { Analytics } from '@vercel/analytics/react';

// Initialize the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Anton Wyrowski',
  description: 'Portfolio of Anton Wyrowski',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable}`}>
      <body className="relative antialiased dark:bg-black dark:text-white">
        <AnimatedGradientBackground />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
