'use client';

import { useRef } from 'react';
import { Window } from 'react-bwin';
import 'react-bwin/react-bwin.css';

export default function Example() {
  const windowRef = useRef(null);

  return (
    <div style={{ width: 400, height: 260 }}>
      <button onClick={() => windowRef.current.removePane('pane-2')}>Remove pane</button>
      <Window
        fitContainer
        panes={[
          { position: 'left', id: 'pane-1', content: <div>Pane 1</div> },
          {
            position: 'right',
            id: 'pane-2',
            content: <div>Pane 2</div>,
          },
        ]}
        ref={windowRef}
      />
    </div>
  );
}
