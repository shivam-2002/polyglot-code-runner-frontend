import React, { useState } from "react";
import StyledHome from "./styled";
import Editor from "components/Editor";
import Header from "components/Header";
import { abcdef } from "@uiw/codemirror-themes-all";
import Output from "components/Output";
import ReactMarkdown from "react-markdown";
import copyIcon from "assets/copy.png";
import { marked } from "marked";
import striptags from "striptags";
import he from "he";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [language, setLanguage] = useState("python");
  const [themeVal, setThemeVal] = useState<any>(abcdef);
  const [value, setValue] = React.useState("");
  const [output, setOutput] = useState<any>("");
  const [codeConverting, setCodeConverting] = useState(false);
  const [codeImproving, setCodeImproving] = useState(false);
  const [codeOutput, setCodeOutput] = useState(false);
  const [improvedCode, setImprovedCode] = useState<any>("");
  const [suggestion, setSuggestion] = useState<any>("");

  const copyToClipboard = (text: string) => {
    const t = markdownToPlainText(text);
    navigator.clipboard
      .writeText(t)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy text: " + err);
      });
  };

  const markdownToPlainText = (markdown: any) => {
    // Convert markdown to HTML
    const html = marked.parse(markdown);
    // Strip HTML tags to get plain text
    const plainText = striptags(html.toString());
    const decodedText = he.decode(plainText);
    return decodedText;
  };

  return (
    <StyledHome>
      <div className="head">
        <div className="head-text">Code&lt;/&gt;Toggle</div>
        <div className="head-t1">
          Write code, execute it, and switch between languages without losing
          functionality.*
        </div>
        <div className="head-t2">
          *Functionality might be affected when switching between programming
          languages.
        </div>
      </div>
      <div className="parent-ctn">
        <div className="container">
          <div className="code-box">
            <span className="code-symbol1">&lt;</span>
            <span className="code-symbol2">/</span>
            <span className="code-symbol3">&gt;</span>
          </div>
          <Header
            setLanguage={setLanguage}
            language={language}
            setThemeVal={setThemeVal}
            value={value}
            setValue={setValue}
            setOutput={setOutput}
            setImprovedCode={setImprovedCode}
            setSuggestion={setSuggestion}
            setCodeConverting={setCodeConverting}
            setCodeImproving={setCodeImproving}
            setCodeOutput={setCodeOutput}
          />
          <Editor
            language={language}
            themeVal={themeVal}
            value={value}
            setValue={setValue}
            loading={codeConverting}
          />
        </div>
        <div className="output-improved-ctn">
          <div className="container1">
            <div className="output-text">Output</div>
            <Output
              output={output}
              themeVal={themeVal}
              height="300px"
              loading={codeOutput}
            />
          </div>
          <div className="container1">
            <div className="output-ctn">
              <span className="output-text">Improvised Code</span>{" "}
              <img
                src={copyIcon}
                alt="copy"
                className="cpy-icon"
                onClick={() => copyToClipboard(improvedCode)}
              />
            </div>
            <Output
              output={markdownToPlainText(improvedCode)}
              themeVal={themeVal}
              height="300px"
              loading={codeImproving}
            />
          </div>
        </div>
        {suggestion && (
          <div className="container1 m-50">
            <ReactMarkdown className="suggestion">{suggestion}</ReactMarkdown>
          </div>
        )}
      </div>
    </StyledHome>
  );
};

export default Home;
