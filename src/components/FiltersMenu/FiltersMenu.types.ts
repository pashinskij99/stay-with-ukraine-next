import { Dispatch, SetStateAction } from 'react';

import { NewsFilterFormatType, NewsFilterProjectType, NewsFilterTagType, NewsFilterTopicType } from '../NewsFilters/NewsFilters.data';

export type FiltersMenuProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  topic: NewsFilterTopicType;
  setTopic: Dispatch<SetStateAction<NewsFilterTopicType>>;
  project: NewsFilterProjectType;
  setProject: Dispatch<SetStateAction<NewsFilterProjectType>>;
  tag: NewsFilterTagType;
  setTag: Dispatch<SetStateAction<NewsFilterTagType>>;
  format: NewsFilterFormatType;
  setFormat: Dispatch<SetStateAction<NewsFilterFormatType>>;
};
