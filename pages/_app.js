import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import NextNProgress from "nextjs-progressbar";

import CartProvider from "../store/CartProvider";
import {AuthContextProvider} from "../store/auth-context";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <CartProvider>
        <NextNProgress />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
      </AuthContextProvider>

  );
}

export default MyApp;
