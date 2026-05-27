import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, '../src/data/population.json');

const POPULATION_URL =
  'https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json&date=2023&per_page=300';

const COUNTRIES_URL =
  'https://api.worldbank.org/v2/country?format=json&per_page=300';

const REGION_TO_CONTINENT = {
  'East Asia & Pacific': 'Asia',
  'Europe & Central Asia': 'Europe',
  'Latin America & Caribbean': 'South America',
  'Middle East & North Africa': 'Africa',
  'North America': 'North America',
  'South Asia': 'Asia',
  'Sub-Saharan Africa': 'Africa',
};

const OCEANIA_CODES = new Set([
  'AUS', 'NZL', 'PNG', 'FJI', 'SLB', 'VUT', 'WSM', 'TON', 'KIR', 'FSM',
  'MHL', 'PLW', 'TUV', 'NRU',
]);

// Top cities with metro area population (World Bank doesn't have city-level data)
const CITIES = [
  { city: 'Delhi', country: 'India', continent: 'Asia', population: 32940000 },
  { city: 'Shanghai', country: 'China', continent: 'Asia', population: 29210000 },
  { city: 'Dhaka', country: 'Bangladesh', continent: 'Asia', population: 23210000 },
  { city: 'São Paulo', country: 'Brazil', continent: 'South America', population: 22430000 },
  { city: 'Cairo', country: 'Egypt', continent: 'Africa', population: 22180000 },
  { city: 'Mexico City', country: 'Mexico', continent: 'North America', population: 21800000 },
  { city: 'Mumbai', country: 'India', continent: 'Asia', population: 21670000 },
  { city: 'Beijing', country: 'China', continent: 'Asia', population: 21540000 },
  { city: 'Osaka', country: 'Japan', continent: 'Asia', population: 19060000 },
  { city: 'New York', country: 'United States', continent: 'North America', population: 18870000 },
  { city: 'Kinshasa', country: 'Congo, Dem. Rep.', continent: 'Africa', population: 17070000 },
  { city: 'Chongqing', country: 'China', continent: 'Asia', population: 16870000 },
  { city: 'Karachi', country: 'Pakistan', continent: 'Asia', population: 16840000 },
  { city: 'Lagos', country: 'Nigeria', continent: 'Africa', population: 15950000 },
  { city: 'Istanbul', country: 'Turkiye', continent: 'Europe', population: 15910000 },
  { city: 'Buenos Aires', country: 'Argentina', continent: 'South America', population: 15370000 },
  { city: 'Kolkata', country: 'India', continent: 'Asia', population: 15130000 },
  { city: 'Manila', country: 'Philippines', continent: 'Asia', population: 14400000 },
  { city: 'Guangzhou', country: 'China', continent: 'Asia', population: 14000000 },
  { city: 'Tokyo', country: 'Japan', continent: 'Asia', population: 13960000 },
  { city: 'Lahore', country: 'Pakistan', continent: 'Asia', population: 13540000 },
  { city: 'Shenzhen', country: 'China', continent: 'Asia', population: 13400000 },
  { city: 'Bangalore', country: 'India', continent: 'Asia', population: 13190000 },
  { city: 'Moscow', country: 'Russian Federation', continent: 'Europe', population: 12640000 },
  { city: 'Los Angeles', country: 'United States', continent: 'North America', population: 12480000 },
  { city: 'Jakarta', country: 'Indonesia', continent: 'Asia', population: 11240000 },
  { city: 'Lima', country: 'Peru', continent: 'South America', population: 11040000 },
  { city: 'Paris', country: 'France', continent: 'Europe', population: 11020000 },
  { city: 'Bangkok', country: 'Thailand', continent: 'Asia', population: 11070000 },
  { city: 'London', country: 'United Kingdom', continent: 'Europe', population: 9540000 },
];

async function fetchCountryMetadata() {
  console.log('Fetching country metadata...');
  const response = await fetch(COUNTRIES_URL);
  const json = await response.json();
  const countries = json[1];

  const map = new Map();
  for (const c of countries) {
    const regionValue = c.region?.value?.trim();
    const continent = REGION_TO_CONTINENT[regionValue];
    if (!continent) continue;

    map.set(c.id, {
      name: c.name,
      continent: OCEANIA_CODES.has(c.id) ? 'Oceania' : continent,
    });
  }
  return map;
}

async function fetchPopulationData() {
  const countryMap = await fetchCountryMetadata();
  console.log(`Loaded metadata for ${countryMap.size} countries`);

  console.log('Fetching population data...');
  const response = await fetch(POPULATION_URL);
  const json = await response.json();
  const records = json[1];

  if (!records || records.length === 0) {
    throw new Error('No data returned from World Bank API');
  }

  // Country-level entries (city = null)
  const data = [];

  for (const record of records) {
    const code = record.countryiso3code;
    const meta = countryMap.get(code);
    if (!meta) continue;

    const population = record.value;
    if (!population) continue;

    data.push({
      city: null,
      country: meta.name,
      continent: meta.continent,
      population: Math.round(population),
    });
  }

  // Add city entries
  for (const city of CITIES) {
    data.push(city);
  }

  data.sort((a, b) => b.population - a.population);

  writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2));
  console.log(`Written ${data.length} records (${data.filter(d => !d.city).length} countries, ${CITIES.length} cities) to ${OUTPUT_PATH}`);
}

fetchPopulationData().catch((err) => {
  console.error('Failed to fetch population data:', err);
  process.exit(1);
});
