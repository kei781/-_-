import Footer from "./footer/Footer";
import Header from "./header/Header";
import Content from "./contents/Content";
import React, { useState } from "react";
import style from "./Layout.module.css";

const Layout = () => {
  const [number, setnumber] = useState([1]);
  return (
    <div className={`${style.Layout} ${style.backgrond1}`}>
      <Header />
      <main className={style.main}>
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
