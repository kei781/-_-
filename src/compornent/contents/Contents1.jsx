import React from "react";
import style from "./Content.module.css";

const Contents1 = () => {
  return (
    <div className={style.textbox}>
      <h1 className={style.title}>This is main1</h1>
      <h1 className={style.subtitle}>Lorem1</h1>
      <h2 className={style.content}>
        Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Placeat
        dolorum beatae
      </h2>
    </div>
  );
};

export default Contents1;
