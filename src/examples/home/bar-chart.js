import { useMemo } from 'react';
import { AgCharts } from 'ag-charts-react';
import populationData from '@/data/population.json';

export default function BarChart() {
  const options = useMemo(() => {
    const countries = populationData.filter((d) => d.city === null).slice(0, 20);

    return {
      theme: 'ag-sheets',
      data: countries,
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
      title: { text: 'Top 20 Countries by Population' },
    };
  }, []);

  return <AgCharts options={options} style={{ height: '100%' }} />;
}
