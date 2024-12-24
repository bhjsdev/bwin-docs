'use client';

import { useEffect, useState } from 'react';

export default function Client({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient && children;
}
