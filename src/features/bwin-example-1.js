'use client';

import { Window, version as BinaryWindowVersion } from 'react-bwin';
import { version as ReactVersion } from 'react';
import 'react-bwin/react-bwin.css';

export default function Example() {
  return (
    <div style={{ width: '90%', height: 444 }}>
      <Window
        fitContainer
        panes={[
          {
            position: 'left',
            size: '30%',
            title: 'Title',
            content: (
              <ul>
                <li>Package version: {BinaryWindowVersion}</li>
                <li>React version: {ReactVersion}</li>
              </ul>
            ),
          },
          {
            position: 'right',
            children: [
              {
                position: 'top',
                size: '30%',
                title: <i>No action buttons</i>,
                actions: null,
              },
              {
                position: 'bottom',
                size: '70%',
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
