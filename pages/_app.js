import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import NextNProgress from "nextjs-progressbar";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NextNProgress />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
