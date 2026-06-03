import { useMemo } from 'react';
import { AgGridProvider, AgGridReact } from 'ag-grid-react';
import {
  AllCommunityModule,
  themeQuartz,
  colorSchemeDark,
  colorSchemeLight,
} from 'ag-grid-community';
import { useTheme } from 'next-themes';
import populationByCountry from '@/data/population-by-country.json';

const gridModules = [AllCommunityModule];

export default function DataGrid() {
  const { resolvedTheme } = useTheme();

  const theme = useMemo(
    () =>
      themeQuartz
        .withPart(resolvedTheme === 'dark' ? colorSchemeDark : colorSchemeLight)
        .withParams({
          fontFamily: "'IBM Plex Sans', system-ui",
          fontSize: 13,
          headerHeight: 32,
          rowHeight: 30,
          oddRowBackgroundColor:
            resolvedTheme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
        }),
    [resolvedTheme]
  );

  const columnDefs = useMemo(
    () => [
      { field: 'country', filter: true, sortable: true },
      { field: 'continent', filter: true, sortable: true },
      {
        field: 'population',
        filter: 'agNumberColumnFilter',
        sortable: true,
        valueFormatter: ({ value }) => value.toLocaleString(),
      },
    ],
    []
  );

  return (
    <AgGridProvider modules={gridModules}>
      <AgGridReact
        theme={theme}
        rowData={populationByCountry}
        columnDefs={columnDefs}
        defaultColDef={{ flex: 1, minWidth: 100 }}
      />
    </AgGridProvider>
  );
}
