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
            position: 'left',
            size: '30%',
            title: 'Title',
          },
          {
            position: 'right',
            children: [
              {
                position: 'top',
                size: '40%',
                title: <i>No action buttons</i>,
                actions: null,
              },
              {
                position: 'bottom',
                size: '60%',
                children: [
                  {
                    position: 'left',
                    size: '50%',
                    draggable: false,
                    content: 'Drag disabled',
                  },
                  {
                    position: 'right',
                    size: '50%',
                    content: ' Drop disabled',
                    droppable: false,
                  },
                ],
              },
            ],
          },
        ]}
      />
    </div>
  );
}
