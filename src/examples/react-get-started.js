'use client';

import { Window } from 'react-bwin';
import 'react-bwin/react-bwin.css';

export default function Example() {
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
