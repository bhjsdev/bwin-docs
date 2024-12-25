'use client';

import Example from '@/features/homepage-example';
import Content from './page.content.mdx';
import Client from '@/components/client';
import './page.css';

export default function Page() {
  return (
    <div className="home">
      <div className="home__intro">
        <Content />
      </div>
      <div className="home__example">
        <Client>
          <Example />
        </Client>
      </div>
    </div>
  );
}
