import { useMemo } from 'react';
import { AgCharts } from 'ag-charts-react';
import populationData from '@/data/population.json';

export default function PieChart() {
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
      theme: 'ag-sheets',
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

  return <AgCharts options={options} style={{ height: '100%' }} />;
}
