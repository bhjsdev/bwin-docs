import SidenavList from './sidenav-list';
import './sidenav.css';

export default function Sidenav() {
  return (
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
        ]}
      />
    </nav>
  );
}
