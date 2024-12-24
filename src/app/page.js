'use client';

import { useEffect, useState } from 'react';
import Example from '../features/homepage-example';

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <h1>Documentation</h1>
      {isClient && <Example />}
    </>
  );
}
