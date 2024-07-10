import React, { useState } from "react";
import StyledHeader from "./styled";
import resetImg from "assets/reset.png";
import { marked } from "marked";
import striptags from "striptags";
import he from "he";
//theme
import {
  abcdef,
  abyss,
  androidstudio,
  andromeda,
  atomone,
  aura,
  basicDark,
  bbedit,
  bespin,
  consoleDark,
  copilot,
  duotoneDark,
  dracula,
  eclipse,
  githubDark,
  kimbie,
  material,
  materialDark,
  monokai,
  noctisLilac,
  nord,
  okaidia,
  quietlight,
  red,
  solarizedDark,
  sublime,
  tokyoNight,
  tokyoNightDay,
  vscodeDark,
  whiteDark,
  tomorrowNightBlue,
} from "@uiw/codemirror-themes-all";

import {
  convertCode,
  executeCode,
  getOptimizedCode,
  getSuggestions,
} from "helper/utils";

interface HeaderProps {
  language: string;
  setLanguage: (val: string) => void;
  setThemeVal: (val: any) => void;
  value: string;
  setValue: (val: string) => void;
  setOutput: (val: any) => void;
  setImprovedCode: (val: any) => void;
  setSuggestion: (val: any) => void;
  setCodeConverting: (val: any) => void;
  setCodeImproving: (val: any) => void;
  setCodeOutput: (val: any) => void;
  input: string;
}

const Header: React.FunctionComponent<HeaderProps> = ({
  language,
  setLanguage,
  setThemeVal,
  value,
  setValue,
  setOutput,
  setImprovedCode,
  setSuggestion,
  setCodeConverting,
  setCodeImproving,
  setCodeOutput,
  input,
}) => {
  const themes = [
    abcdef,
    abyss,
    androidstudio,
    andromeda,
    atomone,
    aura,
    basicDark,
    bbedit,
    bespin,
    consoleDark,
    copilot,
    duotoneDark,
    dracula,
    eclipse,
    githubDark,
    kimbie,
    material,
    materialDark,
    monokai,
    noctisLilac,
    nord,
    okaidia,
    quietlight,
    red,
    solarizedDark,
    sublime,
    tokyoNight,
    tokyoNightDay,
    vscodeDark,
    whiteDark,
    tomorrowNightBlue,
  ];

  const themesStr = [
    "abcdef",
    "abyss",
    "androidstudio",
    "andromeda",
    "atomone",
    "aura",
    "basicDark",
    "bbedit",
    "bespin",
    "consoleDark",
    "copilot",
    "duotoneDark",
    "dracula",
    "eclipse",
    "githubDark",
    "kimbie",
    "material",
    "materialDark",
    "monokai",
    "noctisLilac",
    "nord",
    "okaidia",
    "quietlight",
    "red",
    "solarizedDark",
    "sublime",
    "tokyoNight",
    "tokyoNightDay",
    "vscodeDark",
    "whiteDark",
    "tomorrowNightBlue",
  ];

  const handleRun = async () => {
    setOutput("");
    setImprovedCode("");
    setSuggestion("");
    if (!value.trim()) {
      return;
    }
    setCodeOutput(true);
    setCodeImproving(true);
    const res = executeCode(value, input, language);
    res
      .then((val) => {
        setOutput(val);
        setCodeOutput(false);
      })
      .catch((e) => setOutput(e));

    const res1 = getOptimizedCode(value, language);
    res1
      .then((val) => {
        setImprovedCode(val);
        setCodeImproving(false);
      })
      .catch((e) => setImprovedCode(e));

    const res2 = getSuggestions(value);
    res2
      .then((val) => {
        setSuggestion(val);
      })
      .catch((e) => setSuggestion(e));
  };

  const markdownToPlainText = (markdown: any) => {
    // Convert markdown to HTML
    const html = marked.parse(markdown);
    // Strip HTML tags to get plain text
    const plainText = striptags(html.toString());
    const decodedText = he.decode(plainText);
    return decodedText;
  };

  const handleLanguageChange = async (e: any) => {
    if (value) {
      setCodeConverting(true);
      const res = await convertCode(value, e.target.value, language);
      setValue(markdownToPlainText(res));
      setCodeConverting(false);
    }
    setLanguage(e.target.value);
  };

  const [displayResetText, setDisplayResetText] = useState(false);

  return (
    <StyledHeader>
      <select
        onChange={handleLanguageChange}
        className="drop-down"
        defaultValue={"python"}
      >
        <option value="python">Python</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="java">Java</option>
        <option value="javascript">Java Script</option>
        <option value="bash">Bash</option>
      </select>

      <select
        onChange={(e) => setThemeVal(themes[parseInt(e.target.value)])}
        className="drop-down1"
      >
        {themesStr.map((val, ind) => (
          <option key={ind} value={ind}>
            {val.charAt(0).toUpperCase() + val.slice(1).toLocaleLowerCase()}
          </option>
        ))}
      </select>

      <div className="reset-ctn">
        <img
          src={resetImg}
          alt="Reset"
          className="reset"
          onMouseEnter={() => setDisplayResetText(true)}
          onMouseLeave={() => setDisplayResetText(false)}
          onClick={() => setValue("")}
        />
        {displayResetText && <div className="reset-text">Reset Code</div>}
      </div>

      <div onClick={handleRun} className="run-btn">
        Run
      </div>
    </StyledHeader>
  );
};

export default Header;
