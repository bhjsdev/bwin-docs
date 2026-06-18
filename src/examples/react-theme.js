'use client';

import { Window, WindowProvider, useWindow } from 'react-bwin';
import 'react-bwin/react-bwin.css';

function Theme() {
  const { setTheme } = useWindow();

  return (
    <div style={{ width: 400, height: 260 }}>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('')}>Light</button>
      <Window
        fitContainer
        panes={[
          { position: 'left', id: 'pane-1', content: <div>Pane 1</div> },
          { position: 'right', id: 'pane-2', content: <div>Pane 2</div> },
        ]}
      />
    </div>
  );
}

export default function Example() {
  return (
    <WindowProvider>
      <Theme />
    </WindowProvider>
  );
}
