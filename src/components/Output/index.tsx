import React from "react";
import StyledOutput from "./styled";
import CodeMirror from "@uiw/react-codemirror";
import { EditorState } from "@codemirror/state";
import { basicSetup } from "codemirror";
import { EditorView } from "@codemirror/view";
import BeatLoader from "react-spinners/BeatLoader";
import { CSSProperties } from "react";

interface OutputProps {
  output: any;
  themeVal: any;
  height: string;
  loading: boolean;
}

const Output: React.FunctionComponent<OutputProps> = ({
  output,
  themeVal,
  height,
  loading,
}) => {
  const extensions = [
    basicSetup,
    EditorState.readOnly.of(true), // Make the editor non-editable
    EditorView.lineWrapping,
    EditorView.theme({
      ".cm-content": {
        caretColor: "transparent", // Hide the caret (cursor)
      },
      ".cm-lineNumbers": {
        display: "none", // Hide the line numbers
      },
      ".cm-gutters": {
        display: "none", // Hide the gutters where line numbers are shown
      },
      ".cm-cursor": {
        display: "none !important", // Ensure the cursor is hidden
      },
    }),
  ];

  const color = "#FFF";
  const override: CSSProperties = {
    borderColor: "red",
    position: "absolute",
    top: "50%",
    left: "40%",
  };

  return (
    <StyledOutput>
      <CodeMirror
        value={output}
        extensions={extensions}
        theme={themeVal}
        height={height}
      />

      <BeatLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </StyledOutput>
  );
};

export default Output;
