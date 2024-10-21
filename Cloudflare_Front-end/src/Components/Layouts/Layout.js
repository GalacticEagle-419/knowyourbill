import React from "react";
import { Header, Footer } from "../../Components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <div>
        <Header />
        <main className=" bg-slate-100 px-2 sm:px-4 py-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
