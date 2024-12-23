import Link from 'next/link';
import styles from './sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Link className={styles.logo} href="/">
        Binary Window
      </Link>
      <nav className={styles.nav}>
        <h2 className={styles.navHeading}>Vanilla JS</h2>
        <ul className={styles.navList}>
          <li className={styles.navLi}>
            <Link href="/vanilla-js/get-started">Get started</Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/vanilla-js/apis">APIs</Link>
          </li>
        </ul>
        <h2 className={styles.navHeading}>React</h2>
        <ul className={styles.navList}>
          <li className={styles.navLi}>
            <Link href="/react/get-started">Get started</Link>
          </li>
          <li className={styles.navLi}>
            <Link href="/react/apis">APIs</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
