import { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

import { Header } from '@/components';
import { Footer } from '@/components/Footer';

import 'react-toastify/dist/ReactToastify.css';

type IndexProps = {
  //! TODO: Make a description and children is require
  title?: string;
  description?: string;
  children?: ReactNode;
  headChildren?: ReactNode;
  currentPage?: string;
  backgroundColor?: string;
  headerStyle?: 'transparent' | 'black';
};

export const MetaLayer: FC<IndexProps> = ({
  description,
  title,
  children,
  headChildren,
  currentPage,
  backgroundColor,
  headerStyle,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {headChildren}
      </Head>
      <main style={{ backgroundColor: backgroundColor }}>
        <Header currentPage={currentPage} headerStyle={headerStyle} />
        {children}
        <ToastContainer />
        <Footer />
      </main>
    </>
  );
};
