import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContents">
        <h2 className="footerTitle"> This is Footer</h2>
        <h2 className="footerTitle"> 그외에도 다양한 것들을 할 수 있습니다</h2>
      </div>
      <div className="footerButtons">
        <button> 1 </button>
        <button> 2 </button>
        <button> 3 </button>
        <button> 4 </button>
      </div>
    </footer>
  );
};

export default Footer;
