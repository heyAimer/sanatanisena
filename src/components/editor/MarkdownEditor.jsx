"use client";

import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";

import {
  bold,
  italic,
  hr,
  heading1,
  quote,
  link,
  heading2,
  heading3
} from "@uiw/react-md-editor";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function MarkdownEditor({ value, onChange }) {
  const H1 = { ...heading1,icon: <strong>H1</strong>,  name: "H1" };
  const H2 = { ...heading2, icon: <strong>H2</strong>, name: "H2" };
  const H3 = { ...heading3, icon: <strong>H3</strong>, name: "H3" };

  return (
    <div data-color-mode="light" className="rounded-md overflow-hidden border-neutral-100 border-2">
      <MDEditor
        value={value}
        onChange={onChange}
        height={400}
        className="p-4"
        preview="edit"
        textareaProps={{
          placeholder:
            "Write with clarity and respect. This knowledge will guide many...",
        }}
        commands={[
          bold,
          italic,
          hr,
          quote,
          link,
          H1 , 
          H2,
          H3
        ]}
        />
    </div>
  );
}
