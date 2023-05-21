import { FC } from "react";
import dynamic from "next/dynamic";

import Meta from "@/components/MetaLayer/Meta";
import { getLocale } from '@/locales';

const DynamicNewsItemPage4 = dynamic(() => import('@/views/NewsView/News4View').then((res) => res.default), {ssr: false})

const NewsItemPage4: FC = () => {
  const locale = getLocale();

  return (
    <>
    <Meta
      title={locale === 'en' ? 'The meeting in Senate of France | Stay UA' : 'Засідання у Сенаті Франції | Stay UA'}
      description={locale === 'en' ? 'The meeting with Senator Leconte offered an exceptional platform for Stay With Ukraine to exchange ideas and explore future collaborations.' : 'Зустріч з сенатором Леконт дала виняткову платформу для Stay With Ukraine обмінюватися ідеями та досліджувати майбутні співпраці.'}
      headChildren={
        <>
          <link rel="alternate" hrefLang="en" href="https://www.stayua.com/news/4" />
          <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/news/4" />
        </>
      }
      />

     <DynamicNewsItemPage4 />
    </>
  );
};

export default NewsItemPage4;
