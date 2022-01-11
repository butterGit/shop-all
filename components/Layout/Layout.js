import Navbar from "./Navbar/Navbar";
import { Fragment } from "react";


const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
