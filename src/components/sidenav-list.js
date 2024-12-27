'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidenavList({ heading, links, iconClassName }) {
  const pathname = usePathname();

  return (
    <div className="sidenav-list">
      <h2>
        <i className={iconClassName}></i>
        {heading}
      </h2>
      <ul>
        {links.map((link) => {
          const linkClassName =
            pathname === link.href
              ? 'sidenav-list__link sidenav-list__link--active'
              : 'sidenav-list__link';

          return (
            <li key={link.href}>
              <Link href={link.href} className={linkClassName}>
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
