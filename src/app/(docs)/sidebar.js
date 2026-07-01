import SidenavList from './sidenav-list';
import './sidebar.css';

export default function Sidebar() {
  return (
    <aside className="docs__sidebar">
      <nav className="sidenav">
        <SidenavList
          heading="General"
          links={[
            { href: '/general/overview', title: 'Overview' },
            { href: '/general/config', title: 'Config' },
            { href: '/general/pane', title: 'Pane' },
            { href: '/general/glass', title: 'Glass' },
            { href: '/general/detached-glass', title: 'Detached glass' },
            { href: '/general/windowless-glass', title: 'Windowless glass' },
            { href: '/general/events', title: 'Events' },
            { href: '/general/actions', title: 'Actions' },
            { href: '/general/theme', title: 'Theme' },
          ]}
        />
        <SidenavList
          heading="JavaScript"
          iconClassName="devicon-javascript-plain"
          links={[
            { href: '/javascript/get-started', title: 'Get started' },
            { href: '/javascript/add-pane', title: 'Add pane' },
            { href: '/javascript/update-pane', title: 'Update pane' },
            { href: '/javascript/remove-pane', title: 'Remove pane' },
            { href: '/javascript/actions', title: 'Customize actions' },
            { href: '/javascript/windowless-glass', title: 'Windowless glass' },
            { href: '/javascript/theme', title: 'Theme' },
            { href: 'https://github.com/bhjsdev/bwin', title: 'Repo', external: true },
          ]}
        />
        <SidenavList
          heading="React"
          iconClassName={'devicon-react-original'}
          links={[
            { href: '/react/get-started', title: 'Get started' },
            { href: '/react/add-pane', title: 'Add pane' },
            { href: '/react/update-pane', title: 'Update pane' },
            { href: '/react/remove-pane', title: 'Remove pane' },
            { href: '/react/actions', title: 'Customize actions' },
            { href: '/react/windowless-glass', title: 'Windowless glass' },
            { href: '/react/theme', title: 'Theme' },
            { href: '/react/use-window', title: 'useWindow hook' },
            { href: '/react/troubleshooting', title: 'Troubleshooting' },
            { href: 'https://github.com/bhjsdev/react-bwin', title: 'Repo', external: true },
          ]}
        />
        <SidenavList
          heading="APIs"
          links={[
            { href: '/apis/addPane', title: 'addPane' },
            { href: '/apis/updatePane', title: 'updatePane' },
            { href: '/apis/removePane', title: 'removePane' },
            { href: '/apis/setTheme', title: 'setTheme' },
            { href: '/apis/addWindowlessGlass', title: 'addWindowlessGlass' },
            { href: '/apis/removeWindowlessGlass', title: 'removeWindowlessGlass' },
            { href: '/apis/on', title: 'on' },
            { href: '/apis/off', title: 'off' },
          ]}
        />
      </nav>
    </aside>
  );
}
