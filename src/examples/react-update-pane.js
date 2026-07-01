'use client';

import { Window, WindowProvider, useWindow } from 'react-bwin';
import { useBwinThemeApi } from '@/components/use-bwin-theme';
import 'react-bwin/react-bwin.css';

function UpdatePane() {
  const { updatePane } = useWindow();
  useBwinThemeApi();

  function handleClick() {
    updatePane('pane-2', {
      title: 'Updated',
      content: <em>Updated content</em>,
    });
  }

  return (
    <div style={{ width: 400, height: 260 }}>
      <button onClick={handleClick}>Update pane</button>
      <Window
        fitContainer
        panes={[
          { position: 'left', id: 'pane-1', content: <div>Pane 1</div> },
          {
            position: 'right',
            id: 'pane-2',
            title: 'Pane 2',
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
      <UpdatePane />
    </WindowProvider>
  );
}
