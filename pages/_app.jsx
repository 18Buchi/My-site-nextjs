import Head from "next/head";
import { Footer } from "../components/Footer";
import "../styles/global.css";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/STREETHANDS.png" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </React.Fragment>
  );
}
