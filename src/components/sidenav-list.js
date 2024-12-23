import Link from 'next/link';

export default function SidenavList({ heading, links }) {
  return (
    <>
      <h2>{heading}</h2>
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
