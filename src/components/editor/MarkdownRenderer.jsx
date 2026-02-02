"use client";

import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";

const MarkdownPreview = dynamic(
  () => import("@uiw/react-markdown-preview"),
  { ssr: false }
);

export default function MarkdownRenderer({ content, className = "" }) {
  return (
    <div data-color-mode="light" className={className}>
      <MarkdownPreview  source={content} />
    </div>
  );
}
