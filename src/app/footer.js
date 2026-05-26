'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [buildDate, setBuildDate] = useState(process.env.BUILD_DATE);

  // Call useEffect to avoid SSR mismatch
  useEffect(() => {
    setBuildDate(new Date(buildDate).toLocaleString('en-GB', { timeZoneName: 'short' }));
  }, []);

  return <footer className="footer">Build date: {buildDate}</footer>;
}
