'use client';

import { useEffect, useState } from 'react';
import Example from '../features/bwin-example-1';
import styles from './page.module.css';

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <h1 className={styles.heading}>Binary Window Documentation</h1>
      {isClient && <Example />}
    </>
  );
}
