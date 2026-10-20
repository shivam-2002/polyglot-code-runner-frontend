import React from "react";
import StyledFooter from "./styled";
import linkedInIcon from "assets/linkedin.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://portfolio.shivam-tech.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shivam Kumar
        </a>
        . All rights reserved.
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/shivam-kumar-4a7227192/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedInIcon} className="icon" alt="LinkedIn" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
