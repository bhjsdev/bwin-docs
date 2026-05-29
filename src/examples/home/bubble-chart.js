import { useMemo } from 'react';
import { AgCharts } from 'ag-charts-react';
import populationByCity from '@/data/population-by-city.json';
import { useChartTheme } from './use-chart-theme';

export default function BubbleChart() {
  const chartTheme = useChartTheme();

  const options = useMemo(() => {
    const cities = populationByCity.slice(0, 20);

    // Compact notation auto-picks the unit by magnitude: 1.5B, 37M, 1.2K.
    const formatPopulation = (value) =>
      new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(value);

    // One bubble series per continent so each gets its own colour and legend
    // entry — making each city's continent visible at a glance.
    const byContinent = {};
    for (const city of cities) {
      (byContinent[city.continent] = byContinent[city.continent] || []).push(city);
    }

    // Shared size domain across all series so bubble sizes stay comparable
    // between continents (otherwise each series scales its own min/max).
    const populations = cities.map((c) => c.population);
    const sizeDomain = [Math.min(...populations), Math.max(...populations)];

    const series = Object.entries(byContinent).map(([continent, data]) => ({
      type: 'bubble',
      data,
      xKey: 'city',
      yKey: 'population',
      sizeKey: 'population',
      title: continent,
      domain: sizeDomain,
      maxSize: 60,
      // yKey and sizeKey are both `population`, so the default tooltip lists it
      // twice (once raw). Render a single formatted line instead.
      tooltip: {
        renderer: ({ datum }) => ({
          title: datum.city,
          data: [{ label: 'Population', value: formatPopulation(datum.population) }],
        }),
      },
    }));

    return {
      ...chartTheme,
      series,
      legend: { enabled: true, position: 'bottom' },
      axes: {
        x: { type: 'category', position: 'bottom', label: { rotation: 45 } },
        y: {
          type: 'number',
          position: 'left',
          label: {
            formatter: ({ value }) => formatPopulation(value),
          },
        },
      },
      title: { text: 'Top 20 Cities by Population' },
    };
  }, [chartTheme]);

  return <AgCharts options={options} style={{ height: '100%' }} />;
}
