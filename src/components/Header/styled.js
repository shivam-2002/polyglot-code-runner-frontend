import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 54px;
  padding: 0 14px;
  background: rgba(255, 255, 255, 0.018);
  border-bottom: 1px solid rgba(157, 177, 211, 0.1);

  .drop-down,
  .drop-down1 {
    min-width: 0;
    height: 34px;
    padding: 0 29px 0 10px;
    color: #c3cde0;
    background: #161f32;
    border: 1px solid rgba(157, 177, 211, 0.14);
    border-radius: 7px;
    outline: none;
    font-size: 11px;
    cursor: pointer;
  }

  .drop-down {
    width: 126px;
  }

  .drop-down1 {
    flex: 1;
    max-width: 190px;
  }

  .drop-down:focus,
  .drop-down1:focus {
    border-color: rgba(163, 230, 53, 0.6);
  }

  .drop-down option,
  .drop-down1 option {
    color: #e6edf8;
    background: #151e32;
  }

  .reset-ctn {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex: 0 0 auto;
    padding: 0;
    background: transparent;
    border: 1px solid rgba(157, 177, 211, 0.14);
    border-radius: 7px;
    cursor: pointer;
  }

  .reset-ctn:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  .reset {
    width: 15px;
    height: 15px;
    opacity: 0.72;
  }

  .run-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    min-width: 105px;
    height: 35px;
    padding: 0 14px;
    color: #15210a;
    background: #a3e635;
    border: 0;
    border-radius: 7px;
    cursor: pointer;
    font-size: 11px;
    font-weight: 700;
    transition: background 150ms ease, transform 150ms ease;
  }

  .run-btn:hover {
    background: #b5f34c;
    transform: translateY(-1px);
  }

  .run-icon {
    font-size: 9px;
  }

  @media (max-width: 480px) {
    gap: 6px;
    padding: 0 9px;

    .drop-down {
      width: 105px;
    }

    .drop-down1 {
      padding-right: 17px;
    }

    .run-btn {
      min-width: 76px;
      padding: 0 8px;
    }
  }
`;

export default StyledHeader;
