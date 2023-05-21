import {ReactNode} from 'react'
import Head from 'next/head'

interface IMeta {
  title?: string;
  description?: string;
  headChildren?: ReactNode;
}

const Meta = ({
  description,
  title,
  headChildren,

}: IMeta) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {headChildren}
    </Head>
  )
}

export default Meta