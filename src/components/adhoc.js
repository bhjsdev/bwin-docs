'use client';

import { useState } from 'react';

export default function Adhoc() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>count is: {count}</button>
    </>
  );
}
