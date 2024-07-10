import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  position: fixed;
  bottom: 0;
  width: 100%;
  background: #f8f9fa;
  padding: 10px 0px;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);

  .icon {
    width: 25px;
    height: 25px;
  }
`;

export default StyledFooter;
