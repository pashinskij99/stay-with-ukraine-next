import { Dispatch, SetStateAction } from 'react';

import { HelpUkraineSelectType, NewsFilterFormatType, NewsFilterProjectType,NewsFilterTagType, NewsFilterTopicType } from './../NewsFilters/NewsFilters.data';

export type FilterMenuType = {
  items: NewsFilterTopicType[] | NewsFilterTagType[] | NewsFilterProjectType[] | NewsFilterFormatType[] | HelpUkraineSelectType[]
  state: NewsFilterTopicType | NewsFilterTagType | NewsFilterProjectType | NewsFilterFormatType | HelpUkraineSelectType;
  setState: Dispatch<SetStateAction<NewsFilterTopicType | NewsFilterTagType | NewsFilterProjectType | NewsFilterFormatType | HelpUkraineSelectType>>;
  isCapitalize?: boolean;
  isInNews?: boolean;
};
