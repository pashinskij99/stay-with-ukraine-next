import { FC } from "react";
import dynamic from 'next/dynamic'

import Meta from "@/components/MetaLayer/Meta";
import { getLocale } from '@/locales';

const DynamicHelpUkraineContent = dynamic(() => import('@/views/HelpUkraineView').then((res) => res.default), {ssr: false})

const HelpUkraine: FC = () => {
  const locale = getLocale();

  return (
    <>
      <Meta
        title={locale === 'en' ? 'Stay With Ukraine | How to Help Ukraine' : 'Допомогти Україні |Stay UA'}
        description={locale === 'en' ?'The organization was created with the sole purpose of helping the Ukrainian people and saving as many lives as possible through any means possible.' : 'Організація створена з єдиною метою – допомогти українському народу та врятувати якомога більше життів будь-якими можливими засобами.'}
        headChildren={
          <>
            <link rel="alternate" hrefLang="en" href="https://www.stayua.com/help-Ukraine" />
            <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/help-Ukraine" />
          </>
        }
      />
      <DynamicHelpUkraineContent />
    </>
  );
};

export default HelpUkraine;
