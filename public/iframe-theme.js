// Theme sync for the standalone bwin iframe examples.
// Follows the parent docs theme (sent via postMessage from src/components/iframe.js);
// falls back to the OS preference when the page is opened standalone.
//
// Two things get themed:
// - documentElement's data-theme drives :root color-scheme (iframe-theme.css),
//   which keeps the iframe canvas transparent so the parent's bg shows through.
// - bwin's own dark theme (shipped in the CDN bwin.css) is keyed on the
//   theme="dark" attribute of bw-window, so we toggle that attribute too.
(function () {
  var current = 'light';

  function syncWindow() {
    var win = document.querySelector('bw-window');
    if (!win) return false;
    if (current === 'dark') win.setAttribute('theme', 'dark');
    else win.removeAttribute('theme');
    return true;
  }

  function applyTheme(theme) {
    current = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = current;
    syncWindow();
  }

  applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  window.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'theme') applyTheme(event.data.theme);
  });

  // The page's module script creates the bw-window after this classic script
  // runs, so apply the current theme once it appears, then stop observing (later
  // theme changes just re-query via applyTheme).
  if (!syncWindow()) {
    var observer = new MutationObserver(function () {
      if (syncWindow()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
