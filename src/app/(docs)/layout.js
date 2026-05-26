import DocsSidebar from './sidebar';
import './layout.css';

export default function DocsLayout({ children }) {
  return (
    <div className="docs">
      <DocsSidebar />
      <div className="docs__main">{children}</div>
    </div>
  );
}
