'use client';

import { useRef } from 'react';
import { Window, WindowProvider, DEFAULT_GLASS_ACTIONS } from 'react-bwin';
import { useBwinThemeApi } from '@/components/use-bwin-theme';
import 'react-bwin/react-bwin.css';

function Actions() {
  useBwinThemeApi();
  const countRef = useRef(2);

  const splitAction = {
    label: 'Split',
    placement: 'menu',
    onClick: (event, binaryWindow) => {
      const paneEl = event.target.closest('bw-pane');
      const sashId = paneEl.getAttribute('sash-id');
      countRef.current += 1;
      binaryWindow.addPane(sashId, {
        position: 'bottom',
        size: '50%',
        title: `Pane ${countRef.current}`,
        content: `Pane ${countRef.current}`,
      });
    },
  };

  return (
    <div style={{ width: 400, height: 260 }}>
      <Window
        fitContainer
        actions={[...DEFAULT_GLASS_ACTIONS, splitAction]}
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
      <Actions />
    </WindowProvider>
  );
}
