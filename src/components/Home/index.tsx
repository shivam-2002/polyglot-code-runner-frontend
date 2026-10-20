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
import Footer from "components/Footer";

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
  const [input, setInput] = useState("");

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
      <header className="site-header">
        <div className="brand">
          <span className="brand-mark">&lt;/&gt;</span>
          <span>CodeToggle</span>
        </div>
        <div className="header-note">A little more room to think in code.</div>
        <div className="online-status">
          <span className="status-dot" />
          Workspace ready
        </div>
      </header>

      <main className="page-content">
        <section className="hero">
          <div>
            <div className="eyebrow">Your online coding workspace</div>
            <h1>One workspace. Every language.</h1>
            <p className="hero-copy">
              Write, run, and refine code in one focused space. Switch languages
              whenever your ideas take you somewhere new.
            </p>
          </div>
          <div className="language-chips" aria-label="Supported languages">
            <span className="language-chip">Python</span>
            <span className="language-chip">JavaScript</span>
            <span className="language-chip">C / C++</span>
            <span className="language-chip">Java</span>
            <span className="language-chip">Bash</span>
          </div>
        </section>

        <section className="workbench" aria-label="Code workspace">
          <div className="editor-card">
            <div className="editor-titlebar">
              <div className="editor-title">
                <span className="file-icon">&lt;/&gt;</span>
                <span>Untitled</span>
                <span className="panel-hint">/</span>
                <span className="panel-hint">{language}</span>
              </div>
              <span className="editor-meta">Editor</span>
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
              input={input}
            />
            <Editor
              language={language}
              themeVal={themeVal}
              value={value}
              setValue={setValue}
              loading={codeConverting}
            />
          </div>

          <div className="side-panels">
            <section className="panel">
              <div className="panel-heading">
                <div className="panel-title">
                  <span className="panel-icon">&gt;_</span>
                  Standard input
                </div>
                <span className="panel-hint">Optional</span>
              </div>
              <textarea
                onChange={(e) => setInput(e.target.value)}
                className="input-box"
                placeholder="Add input for your program…"
                aria-label="Standard input"
              />
            </section>

            <section className="panel">
              <div className="panel-heading">
                <div className="panel-title">
                  <span className="panel-icon">↳</span>
                  Program output
                </div>
                <span className="panel-hint">Console</span>
              </div>
              <div className="result-body">
                {!output && (
                  <div className="empty-state">
                    Run your code to see the output here.
                  </div>
                )}
                <Output
                  output={output}
                  themeVal={themeVal}
                  height="240px"
                  loading={codeOutput}
                />
              </div>
            </section>
          </div>
        </section>

        <section className="result-panels" aria-label="Code insights">
          <section className="panel">
            <div className="panel-heading">
              <div className="panel-title">
                <span className="panel-icon">{"{}"}</span>
                Refined code
              </div>
              <button
                type="button"
                className="copy-button"
                onClick={() => copyToClipboard(improvedCode)}
                aria-label="Copy refined code"
                title="Copy refined code"
              >
                <img src={copyIcon} alt="" width="14" height="14" />
              </button>
            </div>
            <div className="panel-body">
              {!improvedCode && (
                <div className="empty-state">
                  A cleaner version of your code will appear here.
                </div>
              )}
              <Output
                output={markdownToPlainText(improvedCode)}
                themeVal={themeVal}
                height="200px"
                loading={codeImproving}
              />
            </div>
          </section>

          <section className="panel">
            <div className="panel-heading">
              <div className="panel-title">
                <span className="panel-icon">✦</span>
                Suggestions
              </div>
              <span className="panel-hint">AI insights</span>
            </div>
            {suggestion ? (
              <ReactMarkdown className="suggestion">{suggestion}</ReactMarkdown>
            ) : (
              <div className="panel-body">
                <div className="empty-state">
                  Helpful tips and ideas will show up after you run your code.
                </div>
              </div>
            )}
          </section>
        </section>
      </main>
      <Footer />
    </StyledHome>
  );
};

export default Home;
