import { FC } from "react";
import dynamic from "next/dynamic";

import Meta from "@/components/MetaLayer/Meta";
import { getLocale } from '@/locales';

const DynamicNewsItemPage3 = dynamic(() => import('@/views/NewsView/News3View').then((res) => res.default), { ssr: false })

const NewsItemPage3: FC = () => {
  const locale = getLocale();

  return (
    <>
      <Meta
        title={locale === 'en' ? 'Cooperation of Poland and Ukraine in the Volyn Region | Stay UA' : 'Співпраця Польщі та України у Волинському регіоні | Stay UA'}
        description={locale === 'en' ? 'The Discussion About Preservation of Cultural Heritage and Economic Cooperation of Poland and Ukraine in the Volyn Region.' : 'Обговорення збереження культурної спадщини та економічної співпраці Польщі та України в Волинському регіоні.'}
        headChildren={
          <>
            <link rel="alternate" hrefLang="en" href="https://www.stayua.com/news/3" />
            <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/news/3" />
          </>
        }
      />

      <DynamicNewsItemPage3 />
    </>
  );
};

export default NewsItemPage3;
