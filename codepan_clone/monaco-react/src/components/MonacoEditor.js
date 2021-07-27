import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";

export default function MonacoEditor(props) {
  const { displayName, language, value, onChange } = props;

  function handleEditorChange(value, event) {
    onChange(value);
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
      </div>
      <Editor
        onChange={handleEditorChange}
        className="monaco-wrapper"
        value={value}
        language={language}
        defaultValue=""
        theme="vs-dark"
      />
    </div>
  );
}
