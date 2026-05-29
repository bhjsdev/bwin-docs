import { useMemo } from 'react';
import { AgGridProvider, AgGridReact } from 'ag-grid-react';
import {
  AllCommunityModule,
  themeQuartz,
  colorSchemeDark,
  colorSchemeLight,
} from 'ag-grid-community';
import { useTheme } from 'next-themes';
import populationData from '@/data/population.json';

const gridModules = [AllCommunityModule];

export default function DataGrid() {
  const { resolvedTheme } = useTheme();

  const theme = useMemo(
    () =>
      themeQuartz
        .withPart(resolvedTheme === 'dark' ? colorSchemeDark : colorSchemeLight)
        .withParams({ fontFamily: "'Noto Sans', system-ui" }),
    [resolvedTheme]
  );

  const rowData = useMemo(() => populationData.filter((d) => d.city === null), []);

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
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ flex: 1, minWidth: 100 }}
      />
    </AgGridProvider>
  );
}
