import Sidenav from '@/components/sidenav';
import Link from 'next/link';
import './layout.css';
import './globals.css';

export const metadata = {
  title: 'Binary Window Docs',
  description: 'Documentation for Binary Window library',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <aside className="layout__sidebar">
            <Link className="logo" href="/">
              Binary Window
            </Link>
            <Sidenav />
          </aside>
          <main className="layout__main">{children}</main>
          <footer className="layout__footer">Build Date: {process.env.BUILD_DATE}</footer>
        </div>
      </body>
    </html>
  );
}
