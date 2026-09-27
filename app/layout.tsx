import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Roboto } from 'next/font/google';
import './globals.css';

const robotoSans = Roboto({
  variable: '--font-roboto-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'tomstuff',
  description: "tom's stuff",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover', // This expands the body outside the safe area
};
export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${robotoSans.variable} pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] h-full antialiased bg-gradient-to-r from-background to-background2`}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
