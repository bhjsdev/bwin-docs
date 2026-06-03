import { useMemo } from 'react';
import { useTheme } from 'next-themes';

// ag-charts takes its theme via the options object (no global provider), so each
// chart selects the light/dark variant from the resolved docs theme. Centralised
// here so the theme name, matching background fill and font live in one place.
//
// The theme is a full AgChartTheme object: baseTheme picks the light/dark variant,
// and params.fontFamily applies the app font across the whole chart.
//
// The background fill matches the bw-glass pane bg (hsl(0 0 16), from bwin's
// own dark theme in react-bwin.css) so charts blend into the window panes
// instead of showing ag-sheets-dark's default deep-blue. Light mode is white,
// matching the light glass pane.
//
// Returns a stable (memoised) object so charts can use it directly as a useMemo dep.
export function useChartTheme() {
  const isDark = useTheme().resolvedTheme === 'dark';

  return useMemo(
    () => ({
      theme: {
        baseTheme: isDark ? 'ag-sheets-dark' : 'ag-sheets',
        params: { fontFamily: "'IBM Plex Sans', system-ui" },
      },
      background: { fill: isDark ? 'hsl(0 0 16)' : 'hsl(0 0 100)' },
    }),
    [isDark]
  );
}
