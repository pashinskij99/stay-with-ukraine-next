import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
import { newsSlice } from '@/redux/slices/newsSlice';

import { ICONS } from '../../../public/icons';
import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';
import { FilterMenu } from '../FilterMenu';
import { FiltersMenu } from '../FiltersMenu';

import {
  HelpUkraineSelectType,
  NewsFilterFormatType,
  NewsFilterProjectType,
  NewsFilterTagType,
  NewsFilterTopicType,
} from './NewsFilters.data';
import {
  StyledAllFiltersButton,
  StyledFilterContainer,
  StyledFiltersContainer,
  StyledIcon,
  StyledMainContainer,
  StyledText,
} from './NewsFilters.styles';

export const NewsFilters: React.FC = () => {
  const initialTopic = useAppSelector(
    (state) => state.news.topic as NewsFilterTopicType,
  );
  const locale = getLocale();
  const { newsFilters } = strings[locale];
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const windowWidthCheck = width && width < 1400;
  const [tag, setTag] = useState<NewsFilterTagType>(
    newsFilters.tags && newsFilters.tags[0],
  );
  const [topic, setTopic] = useState<NewsFilterTopicType>(
    initialTopic ? initialTopic : newsFilters.topics[0],
  );
  const [project, setProject] = useState<NewsFilterProjectType>(
    newsFilters.projects && newsFilters.projects[0],
  );
  const [format, setFormat] = useState<NewsFilterFormatType>(
    newsFilters.formats[0],
  );
  const [isOnTop, setIsOnTop] = useState<boolean>(false);

  useEffect(() => {
    dispatch(newsSlice.actions.setNewsTag({ tag }));
  }, [tag, dispatch]);

  useEffect(() => {
    dispatch(newsSlice.actions.setTopic({ topic }));
  }, [topic, dispatch]);

  useEffect(() => {
    dispatch(newsSlice.actions.setProject({ project }));
  }, [project, dispatch]);

  useEffect(() => {
    dispatch(newsSlice.actions.setEvent({ format }));
  }, [format, dispatch]);

  const handleScroll = useCallback((): void => {
    const verticalScrollPosition: number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (verticalScrollPosition > 400 && !isOnTop) {
      setIsOnTop(true);
    } else if (verticalScrollPosition < 400) {
      setIsOnTop(false);
    }
  }, [isOnTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const countSelectedFilters = () =>
    (tag !== newsFilters.tags[0] ? 1 : 0) +
    (topic !== newsFilters.topics[0] ? 1 : 0) +
    (project !== newsFilters.projects[0] ? 1 : 0) +
    (format !== newsFilters.formats[0] ? 1 : 0);

  const getFilterText = () => {
    switch (locale) {
      case 'en':
        return `Filters (${countSelectedFilters()})`;

      default:
        return `Фільтри (${countSelectedFilters()})`;
    }
  };

  return (
    <StyledMainContainer>
      {windowWidthCheck ? (
        <>
          <StyledAllFiltersButton
            isOnTop={isOnTop}
            onClick={() => setIsOpen(!isOpen)}
          >
            <StyledIcon alt='all filters' src={ICONS.FILTER} />
            <StyledText preset={TEXT_PRESETS.REG_18}>
              {getFilterText()}
            </StyledText>
          </StyledAllFiltersButton>
          <FiltersMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            topic={topic}
            project={project}
            tag={tag}
            format={format}
            setTopic={setTopic}
            setProject={setProject}
            setTag={setTag}
            setFormat={setFormat}
          />
        </>
      ) : (
        <>
          <StyledFiltersContainer>
            <StyledFilterContainer>
              <FilterMenu
                items={newsFilters.topics}
                state={topic}
                setState={
                  setTopic as Dispatch<
                    SetStateAction<
                      | NewsFilterTopicType
                      | NewsFilterTagType
                      | NewsFilterProjectType
                      | NewsFilterFormatType
                      | HelpUkraineSelectType
                    >
                  >
                }
              />
            </StyledFilterContainer>
            <StyledFilterContainer>
              <FilterMenu
                items={newsFilters.projects}
                state={project}
                setState={
                  setProject as Dispatch<
                    SetStateAction<
                      | NewsFilterTopicType
                      | NewsFilterTagType
                      | NewsFilterProjectType
                      | NewsFilterFormatType
                      | HelpUkraineSelectType
                    >
                  >
                }
              />
            </StyledFilterContainer>
            <StyledFilterContainer>
              <FilterMenu
                items={newsFilters.formats}
                state={format}
                setState={
                  setFormat as Dispatch<
                    SetStateAction<
                      | NewsFilterTopicType
                      | NewsFilterTagType
                      | NewsFilterProjectType
                      | NewsFilterFormatType
                      | HelpUkraineSelectType
                    >
                  >
                }
              />
            </StyledFilterContainer>
          </StyledFiltersContainer>
          <StyledFilterContainer>
            <FilterMenu
              items={newsFilters.tags}
              state={tag}
              setState={
                setTag as Dispatch<
                  SetStateAction<
                    | NewsFilterTopicType
                    | NewsFilterTagType
                    | NewsFilterProjectType
                    | NewsFilterFormatType
                    | HelpUkraineSelectType
                  >
                >
              }
            />
          </StyledFilterContainer>
        </>
      )}
    </StyledMainContainer>
  );
};
