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
        
        href="https://github.com/bhjsdev/bwin/releases"
        target="_blank"
        rel="noreferrer"
      >
        bwin@latest
      </a>
      <a
        
        href="https://github.com/bhjsdev/react-bwin/releases"
        target="_blank"
        rel="noreferrer"
      >
        react-bwin@{process.env.REACT_BWIN_VERSION}
      </a>
      <a
        className="footer__link--right"
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
