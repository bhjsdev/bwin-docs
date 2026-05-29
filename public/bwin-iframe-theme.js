// Theme sync for the standalone bwin iframe examples.
// Follows the parent docs theme (sent via postMessage from src/components/iframe.js);
// falls back to the OS preference when the page is opened standalone.
(function () {
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme === 'dark' ? 'dark' : 'light';
  }

  applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  window.addEventListener('message', function (event) {
    if (event.data && event.data.type === 'theme') applyTheme(event.data.theme);
  });
})();
