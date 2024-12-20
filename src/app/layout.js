import SideNav from '@/components/side-nav';
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
          <SideNav />
          <main>{children}</main>
          <footer>Build Date: {process.env.BUILD_DATE}</footer>
        </div>
      </body>
    </html>
  );
}
