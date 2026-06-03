'use client';

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

// Keeps a <Window> in sync with the docs light/dark toggle. Pass the ref you
// attach to <Window>; the effect calls its setTheme('dark'|'') as the theme
// changes (bwin toggles a theme="dark" attribute on bw-window; the dark colors
// ship in react-bwin.css).
//
// We can't use the <Window theme> prop: it's read only on first render (the tree
// is memoised) and next-themes resolves the theme after mount, so the prop would
// stay light and never follow the toggle. Drive it imperatively via the ref
// instead — same reactive pattern as data-grid.js / iframe.js.
export function useBwinTheme(windowRef) {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    windowRef.current?.setTheme(resolvedTheme === 'dark' ? 'dark' : '');
  }, [resolvedTheme]);
}
