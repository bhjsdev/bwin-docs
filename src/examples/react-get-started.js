'use client';

import { useRef } from 'react';
import { Window } from 'react-bwin';
import { useBwinTheme } from '@/components/use-bwin-theme';
import 'react-bwin/react-bwin.css';

export default function Example() {
  const windowRef = useRef(null);
  useBwinTheme(windowRef);

  return (
    <div style={{ width: 400, height: 300 }}>
      <Window
        ref={windowRef}
        fitContainer
        panes={[
          {
            position: 'left',
            size: 200,
            content: <em>Hello World</em>,
          },
          {
            position: 'right',
            children: [
              {
                position: 'top',
                size: '40%',
              },
              {
                position: 'bottom',
                size: '60%',
              },
            ],
          },
        ]}
      />
    </div>
  );
}
