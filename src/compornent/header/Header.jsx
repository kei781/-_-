import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.contents}>
        <div className={style.logo}>
          <div>노상운</div>|<div> 뭔가 하는중</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
