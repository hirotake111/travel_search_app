import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Restaurant Search Service</title>
        <meta name="description" content="GRestaurant Search Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
