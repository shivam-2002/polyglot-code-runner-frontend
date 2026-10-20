import styled from "styled-components";

const StyledOutput = styled.div`
  width: 100%;
  position: relative;

  .cm-editor {
    width: 100%;
    background: transparent !important;
    color: #c9d4e7;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 11px;
  }

  .cm-scroller {
    font-family: inherit;
    line-height: 1.65;
  }

  .cm-gutters {
    background: transparent !important;
    border: 0 !important;
  }
`;

export default StyledOutput;
