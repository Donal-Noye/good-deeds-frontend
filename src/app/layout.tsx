import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import './globals.css';
import { Providers } from '@/app/Providers';
import { Header } from '@/components/header/header';
import { Sidebar } from '@/components/sidebar/sidebar';

const font = Exo_2({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Good Deeds',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className={font.className}>
          <div className="flex min-h-screen">
            <Sidebar />
            <Header />
	          <main className="mt-[94px] px-8 w-full">
              {children}
	          </main>
          </div>
        </body>
      </html>
    </Providers>
  );
}
