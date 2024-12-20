'use client';

import { useState } from 'react';

export default function Adhoc() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Counter: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Add +1</button>
    </>
  );
}
