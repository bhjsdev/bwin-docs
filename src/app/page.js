'use client';

import { useEffect, useState } from 'react';
import Example from '../features/frontpage-example';

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <h1>Binary Window Documentation</h1>
      {isClient && <Example />}
    </>
  );
}
