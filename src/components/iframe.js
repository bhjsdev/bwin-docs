'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { getPath } from '@/utils';

export default function IFrame({ path, width = '100%', height = 300 }) {
  const iframeRef = useRef(null);
  const { resolvedTheme } = useTheme();

  // The iframe is a separate document, so it can't inherit our data-theme
  // attribute or globals.css. Push the resolved theme in via postMessage —
  // on every change and once the iframe has loaded (for the initial value).
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe || !resolvedTheme) return;

    function sendTheme() {
      iframe.contentWindow?.postMessage({ type: 'theme', theme: resolvedTheme }, '*');
    }

    sendTheme();
    iframe.addEventListener('load', sendTheme);
    return () => iframe.removeEventListener('load', sendTheme);
  }, [resolvedTheme]);

  return (
    <iframe ref={iframeRef} style={{ border: 'none', width, height }} src={getPath(path)} />
  );
}
