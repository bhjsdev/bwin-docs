'use client';

import { createElement } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function renderLink(link, pathname) {
  const linkClassName =
    pathname === link.href ? 'sidenav-list__link sidenav-list__link--active' : 'sidenav-list__link';

  return (
    <>
      <Link href={link.href} className={linkClassName} target={link.external ? '_blank' : ''}>
        {link.title}
      </Link>
      {link.external && <i className="bi bi-box-arrow-up-right"></i>}
    </>
  );
}

function renderChildSidenavList(link) {
  return <SidenavList heading={link.title} links={link.children} headingLevel={3} />;
}

export default function SidenavList({ heading, links, iconClassName, headingLevel = 2 }) {
  const pathname = usePathname();

  const headingChildren = (
    <>
      {iconClassName && <i className={iconClassName}></i>}
      {heading}
    </>
  );

  return (
    <div className="sidenav-list">
      {createElement(`h${headingLevel}`, {}, headingChildren)}
      <ul>
        {links.map((link) => {
          return (
            <li key={link.href} className="sidenav-list__item">
              {Array.isArray(link.children)
                ? renderChildSidenavList(link)
                : renderLink(link, pathname)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
