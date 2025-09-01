import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'A Dark Orchestra Films - Multimedia AI Film Company',
  description: 'Revolutionary multimedia AI film company creating cutting-edge content through artificial intelligence, created by visionary filmmaker Chad Neo. Experience the future of filmmaking.',
  keywords: 'AI film, multimedia, dark orchestra, Chad Neo, artificial intelligence, filmmaking, content creation, videography',
  authors: [{ name: 'A Dark Orchestra Films' }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        poppins.variable
      )}>
        {children}
      </body>
    </html>
  );
} 