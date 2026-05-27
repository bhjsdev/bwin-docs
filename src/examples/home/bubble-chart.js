import { useMemo } from 'react';
import { AgCharts } from 'ag-charts-react';
import populationData from '@/data/population.json';

export default function BubbleChart() {
  const options = useMemo(() => {
    const cities = populationData.filter((d) => d.city !== null).slice(0, 20);

    return {
      theme: 'ag-sheets',
      data: cities,
      series: [
        {
          type: 'bubble',
          xKey: 'city',
          yKey: 'population',
          sizeKey: 'population',
          marker: { maxSize: 60 },
        },
      ],
      axes: [
        { type: 'category', position: 'bottom', label: { rotation: 45 } },
        {
          type: 'number',
          position: 'left',
        },
      ],
      title: { text: 'Most Populous Cities' },
    };
  }, []);

  return <AgCharts options={options} style={{ height: '100%' }} />;
}
