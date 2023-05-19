import { FC } from "react";
import dynamic from "next/dynamic";

const DynamicNewsItemPage1 = dynamic(() => import('@/views/NewsView/News1View').then((res) => res.default), {ssr: false})

const NewsItemPage1: FC = () => {
  return (
    <DynamicNewsItemPage1 />
  );
};

export default NewsItemPage1;
