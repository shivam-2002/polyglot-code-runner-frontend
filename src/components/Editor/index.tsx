import React, { useEffect, useState } from "react";
import StyledEditor from "./styled";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import RotateLoader from "react-spinners/RotateLoader";
import { CSSProperties } from "react";

interface EditorProps {
  language: string;
  themeVal: any;
  value: string;
  setValue: (val: string) => void;
  loading: boolean;
}

const Editor: React.FunctionComponent<EditorProps> = ({
  language,
  themeVal,
  value,
  setValue,
  loading,
}) => {
  const onChange = React.useCallback(
    (val: string, viewUpdate: any) => {
      setValue(val);
    },
    [setValue]
  );

  const [langExt, setLangExt] = useState(python());
  const color = "#FFF";
  const override: CSSProperties = {
    borderColor: "red",
    position: "absolute",
  };

  useEffect(() => {
    if (language === "c" || language === "cpp") {
      setLangExt(cpp());
    } else if (language === "python") {
      setLangExt(python());
    } else if (language === "java") {
      setLangExt(java());
    } else if (language === "javascript") {
      setLangExt(javascript());
    } else {
      setLangExt(cpp());
    }
  }, [language]);

  return (
    <StyledEditor>
      <CodeMirror
        value={value}
        height="620px"
        width="600px"
        extensions={[langExt]}
        onChange={onChange}
        theme={themeVal}
      />

      <RotateLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </StyledEditor>
  );
};

export default Editor;
