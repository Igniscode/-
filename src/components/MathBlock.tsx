import katex from 'katex';

interface MathBlockProps {
  latex: string;
  display?: boolean;
  className?: string;
}

export function MathBlock({ latex, display = false, className }: MathBlockProps) {
  const html = katex.renderToString(latex, {
    throwOnError: false,
    displayMode: display,
  });
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
