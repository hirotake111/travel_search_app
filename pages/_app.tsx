import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Travel Advisor Search</title>
        <meta name="description" content="Travel Advisor Search Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
