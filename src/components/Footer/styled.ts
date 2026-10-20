import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  min-height: 62px;
  padding: 12px 20px;
  color: #718099;
  border-top: 1px solid rgba(157, 177, 211, 0.1);
  font-size: 11px;

  a {
    color: #a6b3c9;
    text-decoration: none;
  }

  a:hover {
    color: #a3e635;
  }

  .icon {
    display: block;
    width: 18px;
    height: 18px;
    opacity: 0.7;
  }
`;

export default StyledFooter;
