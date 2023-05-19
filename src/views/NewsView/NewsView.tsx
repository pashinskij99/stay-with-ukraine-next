import { FC } from 'react';

import {
  FlagBlock,
  MetaLayer,
  NewsBlock,
  NewsFilters,
  TalkAboutFuture,
} from '@/components';
import { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

const NewsView: FC = () => {
  const locale = getLocale()

  return (
    <MetaLayer
      title={locale === 'en' ? 'News | Stay UA' : 'Останні новини | Stay UA'}
      description={locale === 'en' ? 'The latest news of the Stay With Ukraine organization.' : 'Останні новини організації Stay With Ukraine.'}
      backgroundColor={COLORS.WHITE}
      currentPage='news'
      headerStyle='transparent'
      headChildren={
        <>
          <link rel="alternate" hrefLang="en" href="https://www.stayua.com/news" />
          <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/news" />
        </>
      }
    >
      <FlagBlock />
      <NewsFilters />
      <NewsBlock />
      <TalkAboutFuture />
    </MetaLayer>
  );
};

export default NewsView;
