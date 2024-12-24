import Link from 'next/link';

export default function SidenavList({ heading, links, iconClassName }) {
  return (
    <>
      <h2>
        <i className={iconClassName}></i>
        {heading}
      </h2>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
