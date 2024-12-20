import Link from 'next/link';

export default function SideNav() {
  return (
    <aside>
      <Link href="/">Binary Window</Link>
      <h3>Vanilla JS</h3>
      <ul>
        <li>
          <Link href="/vanilla-js/get-started">Get Started</Link>
        </li>
        <li>
          <Link href="/vanilla-js/apis">APIs</Link>
        </li>
      </ul>
      <h3>React</h3>
      <ul>
        <li>
          <Link href="/react/get-started">Get Started</Link>
        </li>
        <li>
          <Link href="/react/examples">Examples</Link>
        </li>
      </ul>
    </aside>
  );
}
