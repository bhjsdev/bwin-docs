'use client';

import { Window } from 'react-bwin';
import 'react-bwin/react-bwin.css';

export default function Example() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Window
        fitContainer
        panes={[
          {
            position: 'top',
            size: 0.6,
            children: [
              {
                position: 'left',
                size: 0.5,
              },
              {
                position: 'right',
              },
            ],
          },
          {
            position: 'bottom',
          },
        ]}
      />
    </div>
  );
}
