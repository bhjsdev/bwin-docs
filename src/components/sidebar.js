import Link from 'next/link';
import SidenavList from './sidenav-list';
import Image from 'next/image';
import './sidebar.css';

export default function Sidebar() {
  return (
    <aside className="layout__sidebar">
      <Link className="logo" href="/">
        <Image src={process.env.BASE_PATH + '/logo.svg'} alt="Logo" width={100} height={50}/>
      </Link>
      <nav className="sidenav">
        <SidenavList
          heading="Home"
          links={[{ href: '/overview', title: 'Overview' }]}
        />
        <SidenavList
          heading="JavaScript"
          iconClassName="devicon-javascript-plain"
          links={[
            { href: '/javascript/get-started', title: 'Get started' },
            { href: '/javascript/add-pane', title: 'Add pane' },
            { href: '/javascript/remove-pane', title: 'Remove pane' },
            { href: 'https://github.com/bhjsdev/bwin', title: 'Repo', external: true },
          ]}
        />
        <SidenavList
          heading="React"
          iconClassName={'devicon-react-original'}
          links={[
            { href: '/react/get-started', title: 'Get started' },
            { href: '/react/add-pane', title: 'Add pane' },
            { href: '/react/remove-pane', title: 'Remove pane' },
            { href: '/react/troubleshooting', title: 'Troubleshooting' },
            { href: 'https://github.com/bhjsdev/react-bwin', title: 'Repo', external: true },
          ]}
        />
        <SidenavList heading="General" links={[{ href: '/general/config', title: 'Config' }]} />
        <SidenavList
          heading="APIs"
          links={[
            { href: '/apis/addPane', title: 'addPane' },
            { href: '/apis/removePane', title: 'removePane' },
          ]}
        />
      </nav>
    </aside>
  );
}
