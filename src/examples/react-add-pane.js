'use client';

import { useRef } from 'react';
import { Window } from 'react-bwin';
import 'react-bwin/react-bwin.css';

export default function Example() {
  const windowRef = useRef(null);

  function handleClick() {
    windowRef.current.addPane('pane-2', {
      position: 'bottom',
      size: 120,
      title: 'Pane 3',
      content: <em>Pane 3</em>,
    });
  }

  return (
    <div style={{ width: 400, height: 260 }}>
      <button onClick={handleClick}>Add pane</button>
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
