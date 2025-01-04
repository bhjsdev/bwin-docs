'use client';

import { useState, useEffect } from 'react';
import './footer.css';

export default function Footer() {
  const [buildDate, setBuildDate] = useState(process.env.BUILD_DATE);

  // Call useEffect to avoid SSR mismatch
  useEffect(() => {
    setBuildDate(new Date(buildDate).toLocaleString('en-GB', { timeZoneName: 'short' }));
  }, []);

  return <footer className="layout__footer">Build date: {buildDate}</footer>;
}
