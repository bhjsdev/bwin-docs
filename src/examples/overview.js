'use client';

import { useRef, version as reactVersion } from 'react';
import { Window, version as reactBwinVersion } from 'react-bwin';
import { useBwinTheme } from '@/components/use-bwin-theme';
import 'react-bwin/react-bwin.css';

export default function Example() {
  const windowRef = useRef(null);
  useBwinTheme(windowRef);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Window
        ref={windowRef}
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
