import styled from "styled-components";

const StyledEditor = styled.div`
  position: relative;
  width: 100%;
  height: 540px;
  overflow: hidden;
  background: #0e1525;

  .cm-editor {
    height: 100%;
    background: #0e1525 !important;
    font-size: 12px;
  }

  .cm-scroller {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    line-height: 1.7;
  }

  .cm-gutters {
    background: #0e1525 !important;
    border-right: 1px solid rgba(157, 177, 211, 0.08) !important;
  }

  @media (max-width: 620px) {
    height: 430px;
  }
`;

export default StyledEditor;
