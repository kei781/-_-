import React from "react";
import Footers1 from "./Footers1";
import Footers2 from "./Footers2";
import Footers3 from "./Footers3";
import Footers4 from "./Footers4";
import style from "./Footer.module.css";

const Footer = (number, setnumber) => {
  const FootersList = {
    1: <Footers1 />,
    2: <Footers2 />,
    3: <Footers3 />,
    4: <Footers4 />,
  };

  const changeFooter = (FooterIndex) => {
    FootersList({ footer: FooterIndex });
  };

  return (
    <footer className={style.footer}>
      {/* {FootersList[number]}
      <div className={style.footerButtons}>
        <button
          className={`${number === 1 ? "active" : ""}`}
          onClick={() => changeFooter(setnumber(1))}
        >
          1
        </button>
        <button
          className={`${number === 1 ? "active" : ""}`}
          onClick={() => changeFooter(setnumber(2))}
        >
          2
        </button>
        <button
          className={`${number === 1 ? "active" : ""}`}
          onClick={() => changeFooter(setnumber(3))}
        >
          3
        </button>
        <button
          className={`${number === 1 ? "active" : ""}`}
          onClick={() => changeFooter(setnumber(4))}
        >
          4
        </button>
      </div> */}
      <Footers2 />
    </footer>
  );
};

export default Footer;
