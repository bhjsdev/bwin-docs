import Link from 'next/link';
import SidenavList from './sidenav-list';
import './sidebar.css';
import LogoIcon from './logo.svg';

export default function Sidebar() {
  return (
    <aside className="layout__sidebar">
      <Link className="logo" href="/">
        <LogoIcon />
      </Link>
      <nav className="sidenav">
        <SidenavList
          heading="Vanilla JS"
          iconClassName="devicon-javascript-plain"
          links={[
            { href: '/vanilla-js/get-started', title: 'Get started' },
            { href: '/vanilla-js/apis', title: 'APIs' },
          ]}
        />
        <SidenavList
          heading="React"
          iconClassName={'devicon-react-original'}
          links={[
            { href: '/react/get-started', title: 'Get started' },
            { href: '/react/apis', title: 'APIs' },
            { href: '/react/troubleshooting', title: 'Troubleshooting' },
          ]}
        />
      </nav>
    </aside>
  );
}
