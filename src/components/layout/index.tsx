import React from "react";
import Header from "../header";
import Footer from "../footer";
import "./styles.scss";

const Layout = ({ children, hideFooter }: any) => (
  <div className="layout">
    <Header />
    <main className="layout__main">{children}</main>
    {hideFooter || <Footer />}
  </div>
);

export default Layout;
