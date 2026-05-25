import { codeToHtml } from 'shiki';

export async function CodeBlock({ children, className }) {
  const lang = className?.replace('language-', '') || 'text';
  const html = await codeToHtml(children, {
    lang,
    theme: 'light-plus',
  });
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
