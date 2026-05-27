'use client';

import { useMemo } from 'react';
import { Window } from 'react-bwin';
import { AgGridProvider, AgGridReact } from 'ag-grid-react';
import { AllCommunityModule } from 'ag-grid-community';
import { AgCharts } from 'ag-charts-react';
import { ModuleRegistry, AllCommunityModule as AgChartsAllCommunityModule } from 'ag-charts-community';
import populationData from '@/data/population.json';
import 'react-bwin/react-bwin.css';

ModuleRegistry.registerModules(AgChartsAllCommunityModule);

const gridModules = [AllCommunityModule];

function BarChart() {
  const options = useMemo(() => {
    const top10 = populationData
      .filter((d) => d.city === null)
      .slice(0, 10);

    return {
      data: top10,
      series: [
        {
          type: 'bar',
          xKey: 'country',
          yKey: 'population',
          yName: 'Population',
        },
      ],
      axes: [
        { type: 'category', position: 'bottom' },
        {
          type: 'number',
          position: 'left',
          label: {
            formatter: ({ value }) => `${(value / 1e9).toFixed(1)}B`,
          },
        },
      ],
      title: { text: 'Top 10 Countries by Population' },
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <AgCharts options={options} style={{ height: '100%' }} />
    </div>
  );
}

function PieChart() {
  const options = useMemo(() => {
    const byContinent = {};
    for (const d of populationData) {
      if (d.city !== null) continue;
      byContinent[d.continent] = (byContinent[d.continent] || 0) + d.population;
    }

    const data = Object.entries(byContinent)
      .map(([continent, population]) => ({ continent, population }))
      .sort((a, b) => b.population - a.population);

    return {
      data,
      series: [
        {
          type: 'pie',
          angleKey: 'population',
          legendItemKey: 'continent',
          sectorLabelKey: 'continent',
          sectorLabel: { enabled: true },
        },
      ],
      title: { text: 'Population by Continent' },
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <AgCharts options={options} style={{ height: '100%' }} />
    </div>
  );
}

function DataGrid() {
  const rowData = useMemo(
    () => populationData.filter((d) => d.city === null),
    []
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
    <div style={{ width: '100%', height: '100%' }}>
      <AgGridProvider modules={gridModules}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={{ flex: 1, minWidth: 100 }}
        />
      </AgGridProvider>
    </div>
  );
}

export default function Example() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Window
        fitContainer
        panes={[
          {
            position: 'top',
            size: 0.6,
            children: [
              {
                position: 'left',
                size: 0.5,
                content: <BarChart />,
              },
              {
                position: 'right',
                content: <PieChart />,
              },
            ],
          },
          {
            position: 'bottom',
            content: <DataGrid />,
          },
        ]}
      />
    </div>
  );
}
