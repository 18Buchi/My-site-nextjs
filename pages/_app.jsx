import { Footer } from '../components/Footer'
import '../styles/global.css'
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
  <Component {...pageProps} />
  <Footer />
  </React.Fragment>
  )
}