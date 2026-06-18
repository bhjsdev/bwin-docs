'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useWindow } from 'react-bwin';

// Keeps a <Window> in sync with the docs light/dark toggle. The effect calls the
// window's setTheme('dark'|'') as the theme changes (bwin toggles a theme="dark"
// attribute on bw-window; the dark colors ship in react-bwin.css).
//
// We can't use the <Window theme> prop: it's read only on first render (the tree
// is memoised) and next-themes resolves the theme after mount, so the prop would
// stay light and never follow the toggle. Drive it imperatively instead — same
// reactive pattern as data-grid.js / iframe.js.
//
// Call inside a component rendered under <WindowProvider>; it reaches the Window
// API via useWindow(). setTheme is a stable proxy method, so it's safe in the
// dependency array.
export function useBwinThemeApi() {
  const { setTheme } = useWindow();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setTheme(resolvedTheme === 'dark' ? 'dark' : '');
  }, [resolvedTheme, setTheme]);
}
