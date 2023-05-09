import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { shuffle } from 'lodash';
import Link from 'next/link';

import strings, { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

import { ExtendedButton } from '../ExtendedButton';
import { MainNews, SecondaryNews } from '../NewsComponents/MainPage';

import {
  StyledButtonContainer,
  StyledMainContainer,
  StyledNewsContainer,
  StyledSecondaryNewsContainer,
  StyledTitle,
} from './LatestNews.styles';
import { LatestNewsProps } from './LatestNews.types';

export const LatestNews: React.FC<LatestNewsProps> = ({ isMainPage }) => {
  const locale = getLocale();
  const { latestNews } = strings[locale];
  const [mounted, setMounted] = useState(false);

  const renderMainNews = useCallback(()=>{
    const news = latestNews.data.find((item) => {
      if (Array.isArray(item.tag)) {
        return item.tag.some((tagItem) => tagItem.id === 'inFocus');
      }
      return item.tag.id === 'inFocus';
    });
    return news!;
  },[latestNews.data])

  const renderSecondaryNews = useCallback(()=>{
    const mainNewsTitle = renderMainNews().title;
    const filteredNews = latestNews.data.filter(
      (item) => item.title !== mainNewsTitle,
    );
    const shuffled = shuffle(filteredNews);
    const randomNews = shuffled.slice(0, 3);
    return randomNews.map((item, index) => (
      <Link
        href={item.path}
        key={`main-page-secondary-news-item-${item.title}`}
      >
        <SecondaryNews
          key={`secondary-news-${item.title}-${item.data}-${index}`}
          data={item}
          index={index}
        />
      </Link>
    ));
  }, [latestNews.data, renderMainNews])

  const cachedSecondaryNews = useMemo(()=>renderSecondaryNews(), [renderSecondaryNews])

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <StyledMainContainer isMainPage={isMainPage}>
      <StyledTitle color={COLORS.WHITE} lang={locale}>
        {latestNews.title}
      </StyledTitle>
      <StyledNewsContainer>
        <MainNews data={renderMainNews()} />
        <StyledSecondaryNewsContainer>
          {cachedSecondaryNews}
        </StyledSecondaryNewsContainer>
      </StyledNewsContainer>
      <StyledButtonContainer isMainPage={isMainPage}>
        <ExtendedButton
          link='/news'
          preset='primary'
          title={locale === 'en' ? 'See all news' : 'Дивитись всі новини'}
        />
      </StyledButtonContainer>
    </StyledMainContainer>
  );
};
