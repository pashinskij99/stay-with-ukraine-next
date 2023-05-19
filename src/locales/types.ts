import { MarkerType, TheyAreWithUsItemType } from "@/components";
import { LinkType } from "@/components/Header/Header.data";
import { HelpUkraineSelectType, NewsFilterFormatType, NewsFilterProjectType, NewsFilterTagType, NewsFilterTopicType } from "@/components/NewsFilters/NewsFilters.data";
import { FriendType } from "@/components/OurFriends/OurFriends.types";
import { INews } from "@/models/INews";
import { InputsType } from "@/pagesTypes/Contact.types";
import { HelpUkraineSelectItems, HelpUkraineSelectItemsUk } from "@/pagesTypes/helpUkraine.types";

export type LangType = {
  header: {
    links: ReadonlyArray<LinkType>;
    button: LinkType;
  };
  stayWithUa: {
    subtitle: string;
    helpButton: string;
  };
  areasOfActivity: {
    title: string;
    subtitle: string;
    items: {
      image: string;
      image_mobile?: string;
      title: string;
      text: string;
      alt: string;
      topic: NewsFilterTopicType;
    }[];
  };
  latestNews: {
    title: string;
    data: ReadonlyArray<INews>
  };
  ourFriends: {
    title: string;
    data: ReadonlyArray<FriendType>;
  }
  theyAreWithUs: {
    title: string;
    data: ReadonlyArray<TheyAreWithUsItemType>;
  },
  mediaAboutUs: {
    title: string;
  },
  excitements: {
    title: string;
  },
  map: {
    title: string;
    subtitle: string;
    buttonText: string;
    markers: ReadonlyArray<MarkerType>;
  },
  footer: {
    email: string;
    phone: string;
    links: ReadonlyArray<LinkType>;
    subscribeText: string;
    buttonText: string;
    placeholder: string
  }
  flagBlock: {
    title: string;
    placeholder: string;
  }
  contact: {
    title: string;
    subtitle: string;
    buttonText: string;
    inputs: InputsType[];
  }
  newsFilters: {
    topics: NewsFilterTopicType[],
    projects: NewsFilterProjectType[],
    tags: NewsFilterTagType[];
    formats: NewsFilterFormatType[],
  },
  talkAboutFuture: {
    title: string;
    subtitle: string;
    buttonText: string;
  }
  helpUkraine: {
    title: string;
    selectItems: HelpUkraineSelectType[];
  }
};
