import Head from "next/head";
import "../styles/base.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tailwindcss Emotion</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
