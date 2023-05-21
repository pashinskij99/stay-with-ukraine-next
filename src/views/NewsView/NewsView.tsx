import { FC } from 'react';

import {
  FlagBlock,
  MetaLayer,
  NewsBlock,
  NewsFilters,
  TalkAboutFuture,
} from '@/components';
import { COLORS } from '@/utils/colors';


const NewsView: FC = () => {
  return (
    <MetaLayer
    backgroundColor={COLORS.WHITE}
    currentPage='news'
    headerStyle='transparent'
    >
      <FlagBlock />
      <NewsFilters />
      <NewsBlock />
      <TalkAboutFuture />
    </MetaLayer>
);
};

export default NewsView;
