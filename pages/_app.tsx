import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "../styles/globals.css";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Travel Advisor Search</title>
        <meta name="description" content="Travel Advisor Search Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChakraProvider>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
