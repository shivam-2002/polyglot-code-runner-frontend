import styled from "styled-components";

const StyledHome = styled.div`
  --page: #0b1020;
  --surface: #11182a;
  --surface-raised: #151e32;
  --border: rgba(157, 177, 211, 0.13);
  --text: #f1f5fc;
  --muted: #8794ac;
  --accent: #a3e635;

  min-height: 100vh;
  color: var(--text);
  background:
    radial-gradient(ellipse at 50% -22%, rgba(61, 86, 137, 0.28), transparent 52%),
    var(--page);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;

  .site-header {
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 clamp(20px, 5vw, 76px);
    border-bottom: 1px solid var(--border);
    background: rgba(11, 16, 32, 0.75);
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 11px;
    color: var(--text);
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .brand-mark {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    color: var(--accent);
    background: rgba(163, 230, 53, 0.1);
    border: 1px solid rgba(163, 230, 53, 0.22);
    border-radius: 10px;
    font-family: "SFMono-Regular", Consolas, monospace;
    font-size: 14px;
  }

  .header-note,
  .online-status {
    display: flex;
    align-items: center;
    gap: 9px;
    color: var(--muted);
    font-size: 12px;
  }

  .status-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 12px rgba(163, 230, 53, 0.6);
  }

  .page-content {
    width: min(1480px, calc(100% - 48px));
    margin: 0 auto;
    padding: 42px 0 36px;
  }

  .hero {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 26px;
  }

  .eyebrow,
  .panel-kicker {
    color: var(--accent);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .hero h1 {
    margin: 9px 0 8px;
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 650;
    letter-spacing: -1.8px;
    line-height: 1.12;
  }

  .hero-copy {
    max-width: 570px;
    margin: 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.65;
  }

  .language-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 7px;
    padding-bottom: 4px;
  }

  .language-chip {
    padding: 7px 10px;
    color: #aab5c9;
    background: rgba(255, 255, 255, 0.035);
    border: 1px solid var(--border);
    border-radius: 7px;
    font-family: "SFMono-Regular", Consolas, monospace;
    font-size: 10px;
  }

  .workbench {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(290px, 0.42fr);
    align-items: stretch;
    gap: 16px;
  }

  .editor-card,
  .panel {
    overflow: hidden;
    background: rgba(17, 24, 42, 0.92);
    border: 1px solid var(--border);
    border-radius: 13px;
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.14);
  }

  .editor-titlebar {
    min-height: 47px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 17px;
    border-bottom: 1px solid var(--border);
  }

  .editor-title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #dce4f3;
    font-size: 12px;
    font-weight: 600;
  }

  .file-icon {
    color: #7c8ca9;
    font-family: "SFMono-Regular", Consolas, monospace;
    font-size: 11px;
  }

  .editor-meta {
    color: #78859d;
    font-size: 10px;
  }

  .side-panels {
    display: grid;
    grid-template-rows: minmax(174px, 0.68fr) minmax(260px, 1fr);
    gap: 16px;
    min-height: 100%;
  }

  .panel-heading {
    min-height: 43px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    border-bottom: 1px solid var(--border);
  }

  .panel-title {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e4eaf5;
    font-size: 12px;
    font-weight: 600;
  }

  .panel-icon {
    color: #93a3bd;
    font-size: 13px;
  }

  .panel-hint {
    color: #75829a;
    font-size: 10px;
  }

  .input-box {
    display: block;
    width: 100%;
    min-height: 126px;
    box-sizing: border-box;
    padding: 14px 15px;
    resize: vertical;
    color: #c6d0e2;
    background: transparent;
    border: 0;
    outline: none;
    font-family: "SFMono-Regular", Consolas, monospace;
    font-size: 12px;
    line-height: 1.6;
  }

  .input-box::placeholder {
    color: #66738b;
  }

  .result-body {
    position: relative;
    min-height: 0;
    padding: 8px;
  }

  .empty-state {
    position: absolute;
    inset: 8px;
    display: grid;
    place-items: center;
    padding: 16px;
    color: #6f7c94;
    font-family: "SFMono-Regular", Consolas, monospace;
    font-size: 11px;
    text-align: center;
    pointer-events: none;
  }

  .result-panels {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 16px;
    margin-top: 16px;
  }

  .result-panels .panel-body {
    position: relative;
    min-height: 220px;
    padding: 10px;
  }

  .suggestion {
    padding: 14px 17px;
    color: #b9c5d9;
    font-size: 12px;
    line-height: 1.65;
    white-space: pre-line;
  }

  .suggestion p {
    margin: 0;
  }

  .copy-button {
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    color: #93a3bd;
    background: transparent;
    border: 1px solid var(--border);
    border-radius: 7px;
    cursor: pointer;
    transition: color 150ms ease, border-color 150ms ease;
  }

  .copy-button:hover {
    color: var(--accent);
    border-color: rgba(163, 230, 53, 0.42);
  }

  @media (max-width: 900px) {
    .workbench {
      grid-template-columns: minmax(0, 1fr);
    }

    .side-panels {
      grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
      grid-template-rows: minmax(260px, auto);
    }
  }

  @media (max-width: 620px) {
    .site-header {
      height: 60px;
      padding: 0 18px;
    }

    .header-note {
      display: none;
    }

    .page-content {
      width: calc(100% - 28px);
      padding-top: 30px;
    }

    .hero {
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 20px;
    }

    .hero h1 {
      letter-spacing: -1px;
    }

    .language-chips {
      justify-content: flex-start;
    }

    .side-panels,
    .result-panels {
      grid-template-columns: minmax(0, 1fr);
      grid-template-rows: auto;
    }
  }
`;

export default StyledHome;
