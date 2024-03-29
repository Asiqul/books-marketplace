import './_styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Raleway } from 'next/font/google';
import Header from '@/fragments/header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.className} ${poppins.className} ${raleway.className} bg-background scroll-smooth`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
