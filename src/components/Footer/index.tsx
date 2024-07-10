import React from "react";
import StyledFooter from "./styled";
import linkedInIcon from "assets/linkedin.svg";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        &copy; {new Date().getFullYear()}{" "}
        <a href="https://shivam-details.netlify.app/" target="_blank">
          Shivam Kumar
        </a>
        . All rights reserved.
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/shivam-kumar-4a7227192/"
          target="_blank"
        >
          <img src={linkedInIcon} className="icon" />
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
