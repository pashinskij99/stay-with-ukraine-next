import { FC } from "react";
import dynamic from "next/dynamic";

const DynamicNewsItemPage4 = dynamic(() => import('@/views/NewsView/News4View').then((res) => res.default), {ssr: false})

const NewsItemPage4: FC = () => {

  return (
   <DynamicNewsItemPage4 />
  );
};

export default NewsItemPage4;
