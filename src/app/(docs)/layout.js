import Sidebar from './sidebar';
import './layout.css';

export default function DocsLayout({ children }) {
  return (
    <div className="docs">
      <Sidebar />
      <div className="docs__main">{children}</div>
    </div>
  );
}
