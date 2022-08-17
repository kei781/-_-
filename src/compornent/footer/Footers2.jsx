import React from "react";
import style from "./Footer.module.css";

const Footers2 = () => {
  return (
    <div className={style.footerContents}>
      <div className={style.footerTitle}> This is Footer</div>
      <div className={style.footerTitle}>
        그외에도 다양한 것들을 할 수 있습니다
      </div>
    </div>
  );
};

export default Footers2;
