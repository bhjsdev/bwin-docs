'use client';

import { Window } from 'react-bwin';
import { ModuleRegistry, AllCommunityModule } from 'ag-charts-community';
import BarChart from './bar-chart';
import PieChart from './pie-chart';
import BubbleChart from './bubble-chart';
import DataGrid from './data-grid';
import 'react-bwin/react-bwin.css';
import './styles.css';

ModuleRegistry.registerModules(AllCommunityModule);

export default function Example() {
  return (
    // Set minHeight to 1 to prevent the window from being resized to zero
    // but not being able to resize back. A potential bug in `bwin`            
    <div className="home-example" style={{ width: '100%', height: '100%', minHeight: 1 }}>
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
