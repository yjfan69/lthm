import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ImageGrid } from './ImageGrid';

interface PostProps {
  content: string;
  images?: string[];
}

export function Post({ content, images }: PostProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="prose prose-sm max-w-none dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
      {images && images.length > 0 && <ImageGrid images={images} />}
    </div>
  );
}