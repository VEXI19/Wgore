import React, { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

export default function TextEditor({ handleChange, text }) {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
    }),
    []
  );

  return (
    <JoditEditor
      ref={editor}
      value={text}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => handleChange(newContent)} // preferred to use only this option to update the content for performance reasons
      // onChange={(newContent) => {
      //   console.log(newContent);
      // }}
    />
  );
}
