'use client';

import { WindowProvider, useWindow } from 'react-bwin';
import 'react-bwin/react-bwin.css';

function WindowlessGlass() {
  const { addWindowlessGlass } = useWindow();

  function handleClick() {
    addWindowlessGlass({
      modal: true,
      closeOnBackdropClick: true,
      width: 240,
      height: 140,
      title: 'Dialog',
      content: <em>Click the backdrop or the close action to dismiss.</em>,
    });
  }

  return <button onClick={handleClick}>Open dialog</button>;
}

export default function Example() {
  return (
    <WindowProvider>
      <WindowlessGlass />
    </WindowProvider>
  );
}
