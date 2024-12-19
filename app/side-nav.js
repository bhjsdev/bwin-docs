import Link from "next/link";

export default function SideNav() {
  return (
    <aside>
      <ul>
        <li>
          <ul>
            <li>
              <Link href="/vanilla-js">Vanilla JS</Link>
            </li>
            <li>
              <Link href="/vanilla-js/get-started">Get Started</Link>
            </li>
            <li>
              <Link href="/vanilla-js/apis">APIs</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <Link href="/react">React</Link>
            </li>
            <li>
              <Link href="/react/get-started">Get Started</Link>
            </li>
            <li>
              <Link href="/react/examples">Examples</Link>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}
