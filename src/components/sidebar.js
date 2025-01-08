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
          heading="JavaScript"
          iconClassName="devicon-javascript-plain"
          links={[
            { href: '/javascript/get-started', title: 'Get started' },
            {
              href: '/javascript/apis',
              title: 'APIs',
              children: [
                { href: '/javascript/apis/add-pane', title: 'addPane' },
                { href: '/javascript/apis/remove-pane', title: 'removePane' },
              ],
            },
            { href: 'https://github.com/bhjsdev/bwin', title: 'Repo', external: true },
          ]}
        />
        <SidenavList
          heading="React"
          iconClassName={'devicon-react-original'}
          links={[
            { href: '/react/get-started', title: 'Get started' },
            { href: '/react/apis', title: 'APIs' },
            { href: '/react/troubleshooting', title: 'Troubleshooting' },
            { href: 'https://github.com/bhjsdev/react-bwin', title: 'Repo', external: true },
          ]}
        />
        <SidenavList heading="General" links={[{ href: '/general/config', title: 'Config' }]} />
      </nav>
    </aside>
  );
}
