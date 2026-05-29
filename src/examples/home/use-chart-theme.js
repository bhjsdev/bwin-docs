import { useTheme } from 'next-themes';

// ag-charts takes its theme via the options object (no global provider), so each
// chart selects the light/dark variant from the resolved docs theme. Centralised
// here so the theme-name pair lives in one place.
export function useChartTheme() {
  const { resolvedTheme } = useTheme();
  return resolvedTheme === 'dark' ? 'ag-sheets-dark' : 'ag-sheets';
}
