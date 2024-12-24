'use client';

import BasicExample from './basic-example';
import { useEffect, useState } from 'react';

export default function Example() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && <BasicExample />;
}
