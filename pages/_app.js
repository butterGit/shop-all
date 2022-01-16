import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import NextNProgress from "nextjs-progressbar";
import { Fragment } from "react";
import CartProvider from "../store/CartProvider";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <NextNProgress />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
