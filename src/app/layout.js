import Link from 'next/link';
import Image from 'next/image';
import Footer from './footer';
import './globals.css';
import './layout.css';

export const metadata = {
  title: 'Binary Window - Drag Drop Resize and More',
  description:
    'A lightweight JavaScript library for creating window tiling layouts with drag, drop, and resizable features.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="layout">
          <nav className="top-nav">
            <Link className="logo" href="/">
              <Image src={process.env.BASE_PATH + '/logo.svg'} alt="Logo" width={100} height={50} />
            </Link>
            <div className="top-nav__links">
              <Link href="/">Home</Link>
              <Link href="/overview">Docs</Link>
            </div>
          </nav>
          <main className="layout__main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
