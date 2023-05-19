import { FC } from "react";
import dynamic from 'next/dynamic'

const DynamicNewsContent = dynamic(() => import('@/views/NewsView').then((res) => res.default), {ssr: false})

const News: FC = () => {
  return (
    <DynamicNewsContent />
  );
};

export default News;
