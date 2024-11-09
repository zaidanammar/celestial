import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { LayoutProps } from '../../.next/types/app/layout';
import { Params } from '@/lib/models/page';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: {
    template: '%s - Assignment Coin Siren',
    default: 'Assignment Coin Siren',
  },
  description: 'Assignment Coin Siren',
  icons: '/hypehire-favicon.png',
};

export default async function RootLayout(
  props: LayoutProps & {
    params: Params;
  },
) {
  const { lang } = await props.params;

  return (
    <html lang={lang}>
      <body className={`${poppins.className} antialiased`}>{props.children}</body>
    </html>
  );
}
