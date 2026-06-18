'use client';

import { Window, WindowProvider, useWindow } from 'react-bwin';
import { useBwinThemeApi } from '@/components/use-bwin-theme';
import 'react-bwin/react-bwin.css';

function AddPane() {
  const { addPane } = useWindow();
  useBwinThemeApi();

  function handleClick() {
    addPane('pane-2', {
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
      />
    </div>
  );
}

export default function Example() {
  return (
    <WindowProvider>
      <AddPane />
    </WindowProvider>
  );
}
