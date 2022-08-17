import React from "react";
import style from "./Footer.module.css";
import Footers1 from "./Footers1";
import Footers2 from "./Footers2";
import Footers3 from "./Footers3";
import Footers4 from "./Footers4";

const Footer = () => {
  return (
    <footer className={style.footer}>
      {/* <div className={style.footerContents}>
        <div className={style.footerTitle}> This is Footer</div>
        <div className={style.footerTitle}>
          그외에도 다양한 것들을 할 수 있습니다
        </div>
      </div> */}
      <Footers3 />
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
