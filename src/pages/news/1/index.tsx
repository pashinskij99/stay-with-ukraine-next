import { FC } from "react";
import dynamic from "next/dynamic";

import Meta from "@/components/MetaLayer/Meta";
import { getLocale } from '@/locales';

const DynamicNewsItemPage1 = dynamic(() => import('@/views/NewsView/News1View').then((res) => res.default), {ssr: false})

const NewsItemPage1: FC = () => {
  const locale = getLocale();

  return (
    <>
      <Meta
        title={locale === 'en' ? '31st Economic Forum in Karpacz | Stay UA' : '31-й економічний форум у Карпачі | Stay UA'}
        description={locale === 'en' ? 'Stay With Ukraine organization attended the 31st Economic Forum in Karpacz, engaging with government, business, and experts.' : 'Організація Stay With Ukraine відвідала 31-й Економічний форум у Карпачі. Спілкувались із урядом, бізнесом та експертами.'}
        headChildren={
          <>
            <link rel="alternate" hrefLang="en" href="https://www.stayua.com/news/1" />
            <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/news/1" />
          </>
        }
      />

      <DynamicNewsItemPage1 />
    </>
  );
};

export default NewsItemPage1;
