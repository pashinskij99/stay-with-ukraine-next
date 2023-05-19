import { FC } from "react";
import dynamic from "next/dynamic";

const DynamicNewsItemPage2 = dynamic(() => import('@/views/NewsView/News2View').then((res) => res.default), {ssr: false})

const NewsItemPage2: FC = () => {
  return (
    <DynamicNewsItemPage2 />
  );
};

export default NewsItemPage2;
