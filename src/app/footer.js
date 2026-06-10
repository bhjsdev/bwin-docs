'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
  const [buildDate, setBuildDate] = useState(process.env.BUILD_DATE);

  // Call useEffect to avoid SSR mismatch
  useEffect(() => {
    setBuildDate(new Date(buildDate).toLocaleString('en-GB', { timeZoneName: 'short' }));
  }, []);

  return (
    <footer className="footer">
      <a
        className="footer__link"
        href="https://github.com/bhjsdev/bwin-docs"
        target="_blank"
        rel="noreferrer"
      >
        This site on GitHub
      </a>
      <span>Build date: {buildDate}</span>
    </footer>
  );
}
