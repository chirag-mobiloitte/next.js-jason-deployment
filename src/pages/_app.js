// client/_app.js

import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import Head from "next/head";
import "../../src/layout/globals.css";
import ContextWrapper from "src/context/ContextWrapper";
import "src/Scss/main.css";
import { createCustomTheme } from "/src/Themes/index";
import { useState, useEffect } from "react";
import { Router } from "next/router";
import { PageLoader } from "src/components/PageLoader";

function MyApp({ Component, pageProps }) {
  const theme = createCustomTheme();
  const [isClientLoaded, setIsClientLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const getLayout = Component.getLayout || ((page) => page);

  useEffect(() => {
    setIsClientLoaded(true);
  }, []);

  //funciton to execute the loading effect between route shift
  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
    };
    const stopLoading = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    Router.events.on("routeChangeError", stopLoading);

    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeError", stopLoading);
    };
  }, []);
  return (
    <>
      <Head>
        <meta name="description" content="MVP Care" />
        {/* <link rel="icon" href="/favicon.svg" /> */}
        <link rel="icon" href="/images/fav_logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="/css/react-phone-number-input/style.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      {loading && <PageLoader />}
      {!loading && isClientLoaded && (
        <ThemeProvider theme={theme}>
          <ContextWrapper>
            {getLayout(
              // <WagmiConfig config={wagmiConfig}>
              // <RainbowKitProvider modalSize="compact" chains={chains}>
              <Component {...pageProps} />
              // </RainbowKitProvider>
              // </WagmiConfig>
            )}
          </ContextWrapper>
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
