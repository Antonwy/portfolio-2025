import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';
import { Analytics } from '@vercel/analytics/react';
import Footer from '@/components/ui/footer';
import { Toaster } from 'sonner';

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

export const viewport: Viewport = {
  themeColor: '#040204',
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
        <Footer />
        <Analytics />
        <Toaster
          className="toaster group"
          toastOptions={{
            classNames: {
              toast:
                'group toast group-[.toaster]:bg-[#221D1E] group-[.toaster]:text-foreground group-[.toaster]:border-[#49494A] group-[.toaster]:shadow-lg',
              description: 'group-[.toast]:text-muted-foreground',
              actionButton:
                'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
              cancelButton:
                'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
            },
          }}
        />
      </body>
    </html>
  );
}
