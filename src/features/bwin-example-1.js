'use client';

import { Window, version as reactBwinVersion } from 'react-bwin';
import { version as reactVersion } from 'react';
import 'react-bwin/react-bwin.css';

export default function Example() {
  const windowNode = (
    <Window
      fitContainer
      panes={[
        {
          position: 'left',
          size: '30%',
          title: 'Title',
          content: (
            <ul>
              <li>Package version: {reactBwinVersion}</li>
              <li>React version: {reactVersion}</li>
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
  );

  return <div style={{ width: '90%', height: 444 }}>{windowNode}</div>;
}
