'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Avoid hydration mismatch: the resolved theme is only known on the client.
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === 'dark';
  // Before mount the resolved theme is unknown, so keep the label/icon neutral.
  const label = mounted ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle theme';

  // A ?theme= param overrides the saved preference on load, so once the user
  // toggles manually we strip it (without navigating) — otherwise a reload would
  // snap back to the param's theme. We only ever delete it, never re-add.
  function toggle() {
    setTheme(isDark ? 'light' : 'dark');
    const url = new URL(window.location.href);
    url.searchParams.delete('theme');
    window.history.replaceState(null, '', url);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <i className={`bi ${mounted && isDark ? 'bi-sun' : 'bi-moon-stars'}`} aria-hidden="true" />
    </button>
  );
}
