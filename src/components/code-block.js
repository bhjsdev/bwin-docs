import { codeToHtml } from 'shiki';

export async function CodeBlock({ children, className }) {
  const lang = className?.replace('language-', '') || 'text';
  const html = await codeToHtml(children, {
    lang,
    themes: {
      light: 'light-plus',
      dark: 'dark-plus',
    },
    defaultColor: 'light',
  });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
