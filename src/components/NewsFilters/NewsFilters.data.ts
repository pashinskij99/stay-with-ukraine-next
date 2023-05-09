import { HelpUkraineSelectId, HelpUkraineSelectItems, HelpUkraineSelectItemsUk } from '@/pagesTypes/helpUkraine.types';
import {
  FilterItemFormatId,
  FilterItemProjectId,
  FilterItemTagId,
  FilterItemTopicId,
  NewsFormats,
  NewsFormatsUk,
  NewsProjects,
  NewsProjectsUk,
  NewsTags,
  NewsTagsUk,
  NewsTopics,
  NewsTopicsUk,
} from '@/pagesTypes/news.types';

export type NewsFilterTopicType = {
  id: FilterItemTopicId;
  valueEn: NewsTopics;
  valueUk: NewsTopicsUk;
};

export type NewsFilterTagType = {
  id: FilterItemTagId;
  valueEn: NewsTags;
  valueUk: NewsTagsUk;
};

export type NewsFilterProjectType = {
  id: FilterItemProjectId;
  valueEn: NewsProjects;
  valueUk: NewsProjectsUk;
};

export type NewsFilterFormatType = {
  id: FilterItemFormatId;
  valueEn: NewsFormats;
  valueUk: NewsFormatsUk;
};

export type HelpUkraineSelectType = {
  id: HelpUkraineSelectId;
  valueEn: HelpUkraineSelectItems;
  valueUk: HelpUkraineSelectItemsUk;
}