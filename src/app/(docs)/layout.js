import Sidenav from '@/components/sidebar';
import './layout.css';

export default function DocsLayout({ children }) {
  return (
    <div className="docs">
      <Sidenav />
      <div className="docs__main">{children}</div>
    </div>
  );
}
