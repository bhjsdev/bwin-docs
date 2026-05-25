import Sidenav from '@/components/sidebar';
import Footer from '@/components/footer';
import './layout.css';
import './globals.css';

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
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="layout">
          <Sidenav />
          <main className="layout__main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
