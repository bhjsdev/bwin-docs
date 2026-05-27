'use client';

import { Window } from 'react-bwin';
import { ModuleRegistry, AllCommunityModule } from 'ag-charts-community';
import BarChart from './bar-chart';
import PieChart from './pie-chart';
import BubbleChart from './bubble-chart';
import DataGrid from './data-grid';
import 'react-bwin/react-bwin.css';

ModuleRegistry.registerModules(AllCommunityModule);

export default function Example() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Window
        fitContainer
        panes={[
          {
            position: 'top',
            size: 0.5,
            children: [
              {
                position: 'left',
                size: 0.6,
                content: <BarChart />,
              },
              {
                content: <PieChart />,
              },
            ],
          },
          {
            children: [{ position: 'left', size: 0.5, content: <BubbleChart /> }, { content: <DataGrid /> }],
          },
        ]}
      />
    </div>
  );
}
