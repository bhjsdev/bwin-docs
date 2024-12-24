'use client';

import Example from '@/features/home-example';
import Content from './page.mdx';
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
