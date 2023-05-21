import { FC, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import Head from 'next/head';

import { Header } from '@/components';
import { Footer } from '@/components/Footer';

import 'react-toastify/dist/ReactToastify.css';

type IndexProps = {
  //! TODO: Make a description and children is require
  title?: any
  description?: any
  headChildren?: ReactNode
  children?: ReactNode;
  currentPage?: string;
  backgroundColor?: string;
  headerStyle?: 'transparent' | 'black';
};

export const MetaLayer: FC<IndexProps> = ({
  children,
  currentPage,
  backgroundColor,
  headerStyle,
}) => {
  return (
    <>
      <main style={{ backgroundColor: backgroundColor }}>
        <Header currentPage={currentPage} headerStyle={headerStyle} />
        {children}
        <ToastContainer />
        <Footer />
      </main>
    </>
  );
};
