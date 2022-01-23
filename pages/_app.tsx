import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { LoadScript } from "@react-google-maps/api";

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

      <LoadScript
        libraries={["places"]}
        googleMapsApiKey={process.env.NEXT_PUBLIC_APIKEY || ""}
      >
        <ChakraProvider>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ChakraProvider>
      </LoadScript>
    </>
  );
}

export default MyApp;
