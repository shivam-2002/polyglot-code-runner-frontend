import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;

  .drop-down {
    width: 100px;
    background: #2c242e;
    border: none;
    box-shadow: none;
    outline: none;
    padding: 10px;
    color: #b5b5b5;
    border-radius: 5px;
  }

  .drop-down1 {
    width: 200px;
    background: #2c242e;
    border: none;
    box-shadow: none;
    outline: none;
    padding: 10px;
    color: #b5b5b5;
    border-radius: 5px;
  }

  .run-btn {
    padding: 10px 30px;
    color: #b5b5b5;
    cursor: pointer;
    background: #2c242e;
    border-radius: 5px;
  }

  .run-btn:hover {
    color: #fff;
  }

  .reset {
    color: #b5b5b5;
    cursor: pointer;
    height: 25px;
    width: 25px;
  }

  .reset-ctn {
    position: relative;
  }

  .reset-text {
    position: absolute;
    bottom: -10px;
    font-size: 10px;
    width: 150px;
    color: #fff;
  }
`;

export default StyledHeader;
