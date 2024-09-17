import type { Metadata } from 'next';
import localFont from 'next/font/local';
import BgEffect from '@/components/BgEffect';
import Header from '@/components/Header';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Liam Sutton | Portfolio',
  description:
    "Showcase of Liam's skills, projects, and experience as a full-stack developer. Explore web development expertise in React, Next.js, Node.js, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative bg-gray-50 pt-28 antialiased sm:pt-36`}
      >
        <BgEffect />
        <Header />
        {children}
      </body>
    </html>
  );
}
