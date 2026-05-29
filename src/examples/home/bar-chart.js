import { useMemo } from 'react';
import { AgCharts } from 'ag-charts-react';
import populationData from '@/data/population.json';
import { useChartTheme } from './use-chart-theme';

export default function BarChart() {
  const chartTheme = useChartTheme();

  const options = useMemo(() => {
    const countries = populationData.filter((d) => d.city === null).slice(0, 20);

    return {
      ...chartTheme,
      data: countries,
      series: [
        {
          type: 'bar',
          xKey: 'country',
          yKey: 'population',
          yName: 'Population',
        },
      ],
      axes: {
        x: { type: 'category', position: 'bottom' },
        y: {
          type: 'number',
          position: 'left',
          label: {
            formatter: ({ value }) => `${(value / 1e9).toFixed(1)}B`,
          },
        },
      },
      title: { text: 'Top 20 Countries by Population' },
    };
  }, [chartTheme]);

  return <AgCharts options={options} style={{ height: '100%' }} />;
}
