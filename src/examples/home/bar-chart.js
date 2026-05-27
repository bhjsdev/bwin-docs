import { useMemo } from 'react';
import { AgCharts } from 'ag-charts-react';
import populationData from '@/data/population.json';

export default function BarChart() {
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
