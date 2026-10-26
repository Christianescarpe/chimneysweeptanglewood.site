import React from 'react';

interface ContentRendererProps {
  html: string;
}

export default function ContentRenderer({ html }: ContentRendererProps) {
  if (!html) return null;

  return (
    <div
      className="prose-content max-w-none text-slate-700 leading-relaxed space-y-6"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
