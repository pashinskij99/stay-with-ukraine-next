/** @format */
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Preloader } from '@/components/Preloader';
import { store } from '@/redux/types';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  //* Disable scroll on mobile Safari
  useEffect(() => {
    if (isLoading) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY.toString() || "0") * -1);
    }
  }, [isLoading]);

  return (
    <>
      <Head>
        {isLoading && (
          <style>
            {`
                    html,
                    body {
                        overflow: hidden;
                        overscroll-behavior-y: contain;
                        touch-action: none;
                    }
                `}
          </style>
        )}
      </Head>
      <Provider store={store}>
        <Preloader isLoading={isLoading} />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
