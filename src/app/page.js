'use client';

import { useEffect, useState } from 'react';
import Example from '@/features/home-example';
import './page.css';

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="home">
      <div className="home__intro">
        <h1>Documentation</h1>
        <p>
          Binary Window is a lightweight JavaScript library for creating window tiling layouts with
          features like drag, drop, and resizable panes.
        </p>
      </div>
      <div className="home__example">{isClient && <Example />}</div>
    </div>
  );
}
