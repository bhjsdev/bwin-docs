import { useMemo } from 'react';
import { AgCharts } from 'ag-charts-react';
import populationData from '@/data/population.json';
import { useChartTheme } from './use-chart-theme';

export default function BubbleChart() {
  const chartTheme = useChartTheme();

  const options = useMemo(() => {
    const cities = populationData.filter((d) => d.city !== null).slice(0, 20);

    return {
      ...chartTheme,
      data: cities,
      series: [
        {
          type: 'bubble',
          xKey: 'city',
          yKey: 'population',
          sizeKey: 'population',
          maxSize: 60,
        },
      ],
      axes: {
        x: { type: 'category', position: 'bottom', label: { rotation: 45 } },
        y: {
          type: 'number',
          position: 'left',
          label: {
            // Compact notation auto-picks the unit by magnitude: 1.5B, 37M, 1.2K.
            formatter: ({ value }) =>
              new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(
                value
              ),
          },
        },
      },
      title: { text: 'Most Populous Cities' },
    };
  }, [chartTheme]);

  return <AgCharts options={options} style={{ height: '100%' }} />;
}
