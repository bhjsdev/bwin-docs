'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidenavList({ heading, links, iconClassName }) {
  const pathname = usePathname();

  return (
    <div className="sidenav-list">
      <h2>
        {iconClassName && <i className={iconClassName}></i>}
        {heading}
      </h2>
      <ul>
        {links.map((link) => {
          const linkClassName =
            pathname === link.href
              ? 'sidenav-list__link sidenav-list__link--active'
              : 'sidenav-list__link';

          return (
            <li key={link.href} className="sidenav-list__item">
              <Link
                href={link.href}
                className={linkClassName}
                target={link.external ? '_blank' : ''}
              >
                {link.title}
              </Link>
              {link.external && <i className="bi bi-box-arrow-up-right"></i>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
