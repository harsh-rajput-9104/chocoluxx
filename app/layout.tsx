import type { Metadata } from 'next';
import '@/src/styles/globals.css';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import FAB from '@/src/components/FAB';

export const metadata: Metadata = {
  metadataBase: new URL('https://houseofbakes.in'),
  title: 'House of Bakes — BY Shah | Custom Cakes Vadodara',
  description:
    'House of Bakes by Diya Shah — Custom cakes, cookies, and chocolate gifts baked with love in Vadodara. Order your dream cake today!',
  keywords: ['custom cakes', 'cake Vadodara', 'birthday cake', 'House of Bakes', 'Diya Shah'],
  openGraph: {
    title: 'House of Bakes — BY Shah',
    description: 'Baked with Love, Served with Joy',
    url: 'https://houseofbakes.in',
    images: ['/images/logo.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <FAB />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
