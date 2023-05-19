import { FC } from "react";
import dynamic from "next/dynamic";

const DynamicNewsItemPage3 = dynamic(() => import('@/views/NewsView/News3View').then((res) => res.default), {ssr: false})

const NewsItemPage3: FC = () => {
  return (
    <DynamicNewsItemPage3 />
  );
};

export default NewsItemPage3;
