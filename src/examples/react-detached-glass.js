'use client';

import { useRef } from 'react';
import { Window, WindowProvider, useWindow } from 'react-bwin';
import { useBwinThemeApi } from '@/components/use-bwin-theme';
import 'react-bwin/react-bwin.css';

function DetachedGlass() {
  const { addDetachedGlass } = useWindow();
  useBwinThemeApi();
  const countRef = useRef(0);

  function handleClick() {
    countRef.current += 1;
    addDetachedGlass({
      width: 160,
      height: 120,
      title: `Panel ${countRef.current}`,
      content: <em>Floating panel {countRef.current}</em>,
    });
  }

  return (
    <div style={{ width: 400, height: 260 }}>
      <button onClick={handleClick}>Add detached glass</button>
      <Window
        fitContainer
        panes={[
          { position: 'left', id: 'pane-1', title: 'Pane 1', content: <div>Pane 1</div> },
          { position: 'right', id: 'pane-2', title: 'Pane 2', content: <div>Pane 2</div> },
        ]}
      />
    </div>
  );
}

export default function Example() {
  return (
    <WindowProvider>
      <DetachedGlass />
    </WindowProvider>
  );
}
