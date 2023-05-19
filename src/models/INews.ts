import {
  NewsFilterFormatType,
  NewsFilterProjectType,
  NewsFilterTagType,
  NewsFilterTopicType,
} from '@/components/NewsFilters/NewsFilters.data';

export interface INews {
  image: string;
  image_mobile?: any;
  tag: NewsFilterTagType[] | NewsFilterTagType;
  topic: NewsFilterTopicType[] | NewsFilterTopicType;
  project: NewsFilterProjectType[] | NewsFilterProjectType;
  format: NewsFilterFormatType[] | NewsFilterFormatType;
  title: string;
  subtitle: string;
  data: string;
  dataIndex: number;
  content: string;
  path: string;
}
