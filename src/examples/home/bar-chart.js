import { useMemo } from 'react';
import { AgCharts } from 'ag-charts-react';
import populationByCountry from '@/data/population-by-country.json';
import { useChartTheme } from './use-chart-theme';

export default function BarChart() {
  const chartTheme = useChartTheme();

  const options = useMemo(() => {
    const countries = populationByCountry.slice(0, 20);

    return {
      ...chartTheme,
      data: countries,
      series: [
        {
          type: 'bar',
          direction: 'horizontal',
          xKey: 'country',
          yKey: 'population',
          yName: 'Population',
        },
      ],
      axes: {
        x: { type: 'category', position: 'left' },
        y: {
          type: 'number',
          position: 'bottom',
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
