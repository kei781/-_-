import Footer from "./footer/Footer";
import Header from "./header/Header";
import Content from "./contents/Content";
import React from "react";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="Layout">
      <Header />
      <main className="main">
        <Content />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
