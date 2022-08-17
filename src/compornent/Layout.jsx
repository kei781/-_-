import Header from "./header/Header";
import Content from "./contents/Content";
import Footer from "./footer/Footer";
import React, { usestate } from "react";
import style from "./Layout.module.css";

const Layout = () => {
  const [number, setnumber] = usestate([1]); // 창 변화에 사용할 proprs
  return (
    <div className={style.Layout}>
      <Header />
      {/* Header는 props를 안받음 */}
      <main className={style.main}>
        <Content number={number} />
        {/* Content는 props를 받아서 contents내용에 해당하는 comporenets를 실행함
        props변경은 없음. */}
      </main>
      <Footer number={number} setnumber={setnumber} />
      {/* Footer는 props를 받아서 footers내용에 해당하는 comporenets를 실행함
      + button을 통해 props변경도 함. */}
    </div>
  );
};

export default Layout;
