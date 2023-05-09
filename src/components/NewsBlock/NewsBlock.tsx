import { useEffect, useState } from 'react';
import { orderBy } from 'lodash';

import { useAppSelector } from '@/hooks/redux';
import strings, { getLocale } from '@/locales';
import { INews } from '@/models/INews';

import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';
import { BigNews } from '../NewsComponents';
import { NewsItem } from '../NewsComponents/NewsPage/NewsItem';
import {
  NewsFilterFormatType,
  NewsFilterProjectType,
  NewsFilterTagType,
  NewsFilterTopicType,
} from '../NewsFilters/NewsFilters.data';

import {
  StyledEmptyText,
  StyledMainContainer,
  StyledNewsItemsContainer,
} from './NewsBlock.styles';

export const NewsBlock: React.FC = () => {
  const locale = getLocale();
  const { latestNews } = strings[locale];
  const newsTag = useAppSelector(
    (state) => state.news.tag as NewsFilterTagType,
  );
  const newsTopic = useAppSelector(
    (state) => state.news.topic as NewsFilterTopicType,
  );
  const newsProject = useAppSelector(
    (state) => state.news.project as NewsFilterProjectType,
  );
  const newsFormat = useAppSelector(
    (state) => state.news.format as NewsFilterFormatType,
  );
  const [mounted, setMounted] = useState(false);

  const renderMainNews = (): INews => {
    const news = latestNews.data.find((item) => {
      if (Array.isArray(item.tag)) {
        return item.tag.some((tagItem) => tagItem.id === 'inFocus');
      }
      return item.tag.id === 'inFocus';
    });
    return news!;
  };

  //! TODO: Remove this when BE will be ready
  const renderNewsItems = () => {
    const mainNewsTitle = renderMainNews().title;
    let filteredNews = latestNews.data.filter(
      (item) => item.title !== mainNewsTitle,
    );
    if (newsTag.id === 'latest') {
      filteredNews = orderBy(filteredNews, ['dataIndex'], ['asc']);
    }
    if (newsTag.id === 'oldest') {
      filteredNews = orderBy(filteredNews, ['dataIndex'], ['desc']);
    }
    if (newsTag.id === 'inFocus') {
      filteredNews = filteredNews.filter((item) => {
        if (Array.isArray(item.tag)) {
          return item.tag.some((oneTag) => oneTag.id === newsTag.id);
        } else {
          return item.tag.id === newsTag.id;
        }
      });
    }
    if (newsTag.id === 'mostRead') {
      filteredNews = filteredNews.filter((item) => {
        if (Array.isArray(item.tag)) {
          return item.tag.some((oneTag) => oneTag.id === newsTag.id);
        } else {
          return item.tag.id === newsTag.id;
        }
      });
    }
    if (newsTopic.id !== 'selectTopic') {
      filteredNews = filteredNews.filter((item) => {
        if (Array.isArray(item.topic)) {
          return item.topic.some((oneTopic) => oneTopic.id === newsTopic.id);
        } else {
          return item.topic.id === newsTopic.id;
        }
      });
    }
    if (newsProject.id !== 'selectProject') {
      filteredNews = filteredNews.filter((item) => {
        if (Array.isArray(item.project)) {
          return item.project.some(
            (oneProject) => oneProject.id === newsProject.id,
          );
        } else {
          return item.project.id === newsProject.id;
        }
      });
    }
    if (newsFormat.id !== 'selectFormat') {
      filteredNews = filteredNews.filter((item) => {
        if (Array.isArray(item.format)) {
          return item.format.some(
            (oneFormat) => oneFormat.id === newsFormat.id,
          );
        } else {
          return item.format.id === newsFormat.id;
        }
      });
    }
    if (filteredNews.length) {
      return filteredNews.map((item, index) => (
        <NewsItem data={item} key={`news-page-item-${item.title}-${index}`} />
      ));
    } else {
      return (
        <StyledEmptyText preset={TEXT_PRESETS.REG_22}>
          {locale === 'en'
            ? 'There are no news for such filters'
            : 'Новин за такими фільтрами немає'}
        </StyledEmptyText>
      );
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <StyledMainContainer>
      <BigNews data={renderMainNews()} />
      <StyledNewsItemsContainer>{renderNewsItems()}</StyledNewsItemsContainer>
    </StyledMainContainer>
  );
};
