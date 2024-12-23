import SidenavList from './sidenav-list';
import './sidenav.css';

export default function Sidenav() {
  return (
    <nav className="sidenav">
      <SidenavList
        heading="Vanilla JS"
        links={[
          { href: '/vanilla-js/get-started', title: 'Get started' },
          { href: '/vanilla-js/apis', title: 'APIs' },
        ]}
      />
      <SidenavList
        heading="React"
        links={[
          { href: '/react/get-started', title: 'Get started' },
          { href: '/react/apis', title: 'APIs' },
        ]}
      />
    </nav>
  );
}
