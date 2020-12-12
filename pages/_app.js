import Head from "next/head";
import { Fragment } from "react";
import "../styles/base.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Tailwindcss Emotion</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
