import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

export default function CVApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Tamir Madar · CV</title>
        <meta
          name="description"
          content="Sleek, responsive viewer for Tamir Madar's CV."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

