import React from 'react';

import {
  FlagBlock,
  MetaLayer,
  NewsBlock,
  NewsFilters,
  TalkAboutFuture,
} from '@/components';
import { COLORS } from '@/utils/colors';

const AboutUs: React.FC = () => {
  return (
    <MetaLayer
      title='Stay with Ukraine | News'
      description='News page'
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

export default AboutUs;
