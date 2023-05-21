import { FC } from "react";
import dynamic from 'next/dynamic'

import Meta from "@/components/MetaLayer/Meta";
import { getLocale } from '@/locales';

const DynamicNewsContent = dynamic(() => import('@/views/NewsView').then((res) => res.default), {ssr: false})

const News: FC = () => {
  const locale = getLocale()

  return (
    <>
      <Meta
      title={locale === 'en' ? 'News | Stay UA' : 'Останні новини | Stay UA'}
      description={locale === 'en' ? 'The latest news of the Stay With Ukraine organization.' : 'Останні новини організації Stay With Ukraine.'}
      headChildren={
        <>
          <link rel="alternate" hrefLang="en" href="https://www.stayua.com/news" />
          <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/news" />
        </>
      }
      />
      <DynamicNewsContent />
    </>
  );
};

export default News;
