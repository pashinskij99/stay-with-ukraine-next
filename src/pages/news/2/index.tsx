import { FC } from "react";
import dynamic from "next/dynamic";

import Meta from "@/components/MetaLayer/Meta";
import { getLocale } from '@/locales';

const DynamicNewsItemPage2 = dynamic(() => import('@/views/NewsView/News2View').then((res) => res.default), {ssr: false})

const NewsItemPage2: FC = () => {
  const locale = getLocale();

  return (
    <>
      <Meta
        title={locale === 'en' ? 'The Story about Chernihiv | Stay UA': 'Історія про Чернігів | Stay UA'}
        description={locale === 'en' ? 'Today, we would like to share a story of resilience and compassion - a story about delivering aid to the heroic city of Chernihiv at the beginning of the war.' : 'Сьогодні ми хочемо поділитися історією стійкості та співчуття – історією про доставку допомоги місту-герою Чернігову на початку війни.'}
        headChildren={
          <>
            <link rel="alternate" hrefLang="en" href="https://www.stayua.com/news/2" />
            <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/news/2" />
          </>
        }
      />
      <DynamicNewsItemPage2 />
    </>
  );
};

export default NewsItemPage2;
