import Sidebar from '@/components/sidebar';
import styles from './layout.module.css';
import './globals.css';

export const metadata = {
  title: 'Binary Window Docs',
  description: 'Documentation for Binary Window library',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>Build Date: {process.env.BUILD_DATE}</footer>
        </div>
      </body>
    </html>
  );
}
