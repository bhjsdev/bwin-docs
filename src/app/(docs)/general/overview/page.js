'use client';

import Example from '@/examples/overview';
import Client from '@/components/client';
import Content from './page.content.mdx';
import './page.css';

export default function Page() {
  return (
    <div className="overview">
      <div className="overview__intro">
        <Content />
      </div>
      <div className="overview__example">
        <Client>
          <Example />
        </Client>
      </div>
    </div>
  );
}
