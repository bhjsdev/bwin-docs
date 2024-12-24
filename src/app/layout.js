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
