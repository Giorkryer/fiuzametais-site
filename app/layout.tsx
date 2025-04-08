import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header/Header'; 

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Fiuza Metais',
  description: 'Responsabilmental Reserves',
  icons: {
    icon: '/favicon.ico', 
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="font-inter min-h-screen bg-[#E8E8E8] flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}