import { useMemo } from 'react';
import { useTheme } from 'next-themes';

// ag-charts takes its theme via the options object (no global provider), so each
// chart selects the light/dark variant from the resolved docs theme. Centralised
// here so the theme name and matching background fill live in one place.
//
// The background fill matches the bw-glass pane bg (see public/bwin-dark-theme.css)
// so charts blend into the window panes instead of showing ag-sheets-dark's default
// deep-blue. Light mode is white, matching the light glass pane.
//
// Returns a stable (memoised) object so charts can use it directly as a useMemo dep.
export function useChartTheme() {
  const isDark = useTheme().resolvedTheme === 'dark';

  return useMemo(
    () => ({
      theme: isDark ? 'ag-sheets-dark' : 'ag-sheets',
      background: { fill: isDark ? 'hsl(0 0% 16%)' : 'hsl(0 0% 100%)' },
    }),
    [isDark]
  );
}
