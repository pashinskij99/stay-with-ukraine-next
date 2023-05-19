import { NewsFilterTopicType } from "../NewsFilters/NewsFilters.data";

export type ActivityAreaItemType = {
  image: string;
  image_mobile?: any;
  title: string;
  text: string;
  alt: string;
  topic: NewsFilterTopicType;
};

export type ActivityAreaItemProps = {
  data: ActivityAreaItemType;
  isLastIndex: boolean;
};
