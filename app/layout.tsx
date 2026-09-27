import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
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
  viewportFit: 'cover', // This expands the body outside the safe area
};
export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={`${robotoSans.variable} h-full`}>
      <body className='min-h-full flex flex-col justify-center items-center relative isolation-auto'>
        <div
          className='
          fixed inset-0 -z-10 h-full w-full 
          bg-gradient-to-r from-background to-background2
          pointer-events-none
        '
        />
        <main className='h-full flex flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]'>
          {children}
        </main>
      </body>
    </html>
  );
}
