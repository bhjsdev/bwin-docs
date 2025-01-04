'use client';

import './footer.css';

export default function Footer() {
  const buildDate = process.env.BUILD_DATE;
  const localDate = new Date(buildDate).toLocaleString('en-GB', { timeZoneName: 'short' });

  return (
    <footer className="layout__footer" suppressHydrationWarning={true}>
      Build date: {localDate}
    </footer>
  );
}
