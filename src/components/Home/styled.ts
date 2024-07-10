import styled from "styled-components";

const StyledHome = styled.div`
  background: #2c222e;
  min-height: 100vh;
  padding: 5% auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;

  .head {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .head-text {
    font-size: 50px;
    font-weight: 600;
    background: linear-gradient(
      45deg,
      red,
      blue,
      red,
      pink,
      cyan,
      yellow,
      grey,
      green
    );
    -webkit-background-clip: text;
    color: transparent;
  }

  .head-t1 {
    font-size: 16px;
    color: #fff;
  }

  .head-t2 {
    font-size: 10px;
    color: #fff;
  }

  .parent-ctn {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }

  .container {
    background: #2d2830;
    border: 1px solid #fff;
    width: auto;
    border-radius: 5px;
    padding: 5px;
  }

  .code-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    height: 40px;
  }

  .code-symbol1 {
    color: #daa4cb;
  }

  .code-symbol2 {
    color: #52eccb;
  }

  .code-symbol3 {
    color: #00b0ff;
  }

  .container1 {
    background: #2d2830;
    border: 1px solid #fff;
    width: auto;
    border-radius: 5px;
    padding: 5px;
  }

  .output-ctn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .output-text {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px;
    color: #fff;
  }

  .suggestion {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    width: auto;
    // padding: 20px;
    white-space: pre-line;
    margin: 20px;
  }

  p {
    margin-block-start: 0px !important;
    margin-block-end: 0px !important;
  }

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
  }

  .code-block {
    background-color: #282c34; /* Dark background */
    color: #abb2bf; /* Light text color */
    padding: 1em; /* Padding for some spacing */
    border-radius: 4px; /* Rounded corners */
    font-family: "Source Code Pro", monospace; /* Monospaced font */
    white-space: pre-wrap; /* Preserve whitespace and wrapping */
    overflow-x: auto; /* Horizontal scrolling for long lines */
    width: 400px;
    height: 550px;
    overflow-y: auto;
  }

  .cpy-icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .output-improved-ctn {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .m-50 {
    margin-bottom: 50px;
  }

  .input-box {
    width: 98%;
    resize: none;
    box-shadow: none;
    outline: none;
    height: 100px;
    overflow-y: auto;
    word-wrap: wrap;
  }

  .pt-ctn {
    width: 610px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export default StyledHome;
