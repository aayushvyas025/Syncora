import React from "react";
import Navbar from "../components/pages/Navbar";

function Layout({ style, children }) {
  return (
    <div className={style}>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
