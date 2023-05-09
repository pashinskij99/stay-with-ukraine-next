import { NewsFilterFormatType, NewsFilterProjectType, NewsFilterTagType, NewsFilterTopicType } from '@/components/NewsFilters/NewsFilters.data';

export type SetNewsTagPayload = {
  tag: NewsFilterTagType;
};

export type SetNewsProjectPayload = {
  project: NewsFilterProjectType;
};

export type SetNewsTopicPayload = {
  topic: NewsFilterTopicType;
};

export type SetNewsFormatPayload = {
  format: NewsFilterFormatType;
};
