'use client';

import { Window, WindowProvider } from 'react-bwin';
import { useBwinThemeApi } from '@/components/use-bwin-theme';
import 'react-bwin/react-bwin.css';

function GetStarted() {
  useBwinThemeApi();

  return (
    <div style={{ width: 400, height: 300 }}>
      <Window
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

export default function Example() {
  return (
    <WindowProvider>
      <GetStarted />
    </WindowProvider>
  );
}
