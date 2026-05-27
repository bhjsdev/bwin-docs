import { useMemo } from 'react';
import { AgGridProvider, AgGridReact } from 'ag-grid-react';
import { AllCommunityModule } from 'ag-grid-community';
import populationData from '@/data/population.json';

const gridModules = [AllCommunityModule];

export default function DataGrid() {
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
        containerStyle={{padding: 10}}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ flex: 1, minWidth: 100 }}
      />
    </AgGridProvider>
  );
}
