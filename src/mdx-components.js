import { CodeBlock } from '@/components/code-block';

export function useMDXComponents(components) {
  return {
    pre: ({ children }) => {
      const { className, children: code } = children?.props || {};
      return <CodeBlock className={className}>{code}</CodeBlock>;
    },
    ...components,
  };
}
