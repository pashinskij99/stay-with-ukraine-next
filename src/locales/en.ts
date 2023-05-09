import { OurFriendsEnCategories } from '@/data';
import {
  TheyAreWithUsEnTags,
  TheyAreWithUsLocationEnTags,
} from '@/data/TheyAreWithUs.data';
import { GridNamesEn } from '@/pagesTypes/Contact.types';
import {
  HelpUkraineSelectId,
  HelpUkraineSelectItems,
  HelpUkraineSelectItemsUk,
} from '@/pagesTypes/helpUkraine.types';
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

import {
  FRIENDS_IMAGES,
  IMAGES,
  NEWS_IMAGES,
  WITH_US_IMAGES,
} from '../../public/images';

import { LangType } from './types';

const modules: LangType = {
  header: {
    //! TODO: Uncomment the items when they are needed!
    links: [
      // {
      //   name: 'About us',
      //   path: '/aboutUs',
      //   id: 'aboutUs',
      // },
      // {
      //   name: 'Projects',
      //   path: '/projects',
      //   id: 'projects',
      // },
      {
        name: 'News',
        path: '/news',
        id: 'news',
      },
      // {
      //   name: 'Eternal Glory ',
      //   path: '/externalGlory',
      //   id: 'externalGlory',
      // },
      {
        name: 'Contact',
        path: '/contact',
        id: 'contact',
      },
    ],
    button: {
      name: 'Help Ukraine',
      path: '/help-Ukraine',
      id: 'helpUkraine',
    },
  },
  stayWithUa: {
    subtitle:
      'The organization solely created to save as many lives as possible.',
    helpButton: 'I want to help',
  },
  areasOfActivity: {
    title: 'Our areas of activity',
    subtitle: 'They may take our lives, but they’ll never take our freedom',
    items: [
      {
        image: IMAGES.AOA_BUSINESS_COOPERATION,
        title: 'Cooperation with Business',
        text: 'We have a unique program specifically designed to collaborate with businesses and raise funds for Ukraine without requiring significant financial involvement or disruption to their financial plans and revenue projections. This program also provides opportunities for media coverage, well-known figures and embassies engagement, consumer participation, and brand loyalty enhancement.',
        alt: 'soldier',
        topic: {
          id: FilterItemTopicId.CooperationWithBusiness,
          valueEn: NewsTopics.CooperationWithBusiness,
          valueUk: NewsTopicsUk.CooperationWithBusiness,
        },
      },
      {
        image: IMAGES.AOA_INTERNATIONAL_AFFAIRS,
        title: 'International Affairs',
        text: "We lead multiple projects aimed at supporting Ukraine's development and prosperity, as well as strengthening relationships with countries across the globe, by negotiating with esteemed representatives of various governmental organizations.",
        alt: 'soldier',
        topic: {
          id: FilterItemTopicId.InternationalAffairs,
          valueEn: NewsTopics.InternationalAffairs,
          valueUk: NewsTopicsUk.InternationalAffairs,
        },
      },
      {
        image: IMAGES.AOA_ECONOMIC_REVIVAL,
        title: 'Economic Revival',
        text: "We showcase Ukraine's potential for economic growth to major corporations worldwide, emphasizing that investing in Ukraine and creating jobs enhances their global reputation and demonstrates their commitment to sustainability and support for those affected by Russian atrocities.",
        alt: 'office',
        topic: {
          id: FilterItemTopicId.EconomicRevival,
          valueEn: NewsTopics.EconomicRevival,
          valueUk: NewsTopicsUk.EconomicRevival,
        },
      },
      {
        image: IMAGES.AOA_CULTURE,
        title: 'Culture',
        text: 'Our organization is dedicated to leading projects that both enhance the legacy of Ukrainian culture to impart it to the future generations while also showcasing its beauty to the world by organizing exhibitions, performances, and concerts, and inviting internationally respected figures to participate and support Ukraine.',
        alt: 'ruins',
        topic: {
          id: FilterItemTopicId.Culture,
          valueEn: NewsTopics.Culture,
          valueUk: NewsTopicsUk.Culture,
        },
      },
      {
        image: IMAGES.AOA_CLUB_OF_FRIENDS,
        title: 'The club of friends of Ukraine',
        text: 'Our organization brings together genuine supporters of Ukraine and exceptional Ukrainians from all around the globe, creating a powerful network that collaborates on international affairs, charitable projects, and the economic recovery and reconstruction of Ukraine.',
        alt: 'soldier',
        topic: {
          id: FilterItemTopicId.TheClubOfFriendsOfUkraine,
          valueEn: NewsTopics.TheClubOfFriendsOfUkraine,
          valueUk: NewsTopicsUk.TheClubOfFriendsOfUkraine,
        },
      },
      {
        image: IMAGES.AOA_MEDIA,
        title: 'Media',
        text: "We highlight heroic feats of Ukrainians protecting their country, as well as stories of atrocities committed by the Russians, emphasize the impact of those around the world, who helped Ukraine in its darkest times, and report on our organization's successes and new projects.",
        alt: 'conference',
        topic: {
          id: FilterItemTopicId.Media,
          valueEn: NewsTopics.Media,
          valueUk: NewsTopicsUk.Media,
        },
      },
      {
        image: IMAGES.AOA_MEDICAL,
        title: 'Medical',
        text: 'Our organization is dedicated to providing medical care and support to individuals affected by the war in Ukraine through initiatives such as mobile clinics, medical supplies, equipment, and vehicles, as well as mental health services.',
        alt: 'soldier',
        topic: {
          id: FilterItemTopicId.Medical,
          valueEn: NewsTopics.Medical,
          valueUk: NewsTopicsUk.Medical,
        },
      },
      {
        image: IMAGES.AOA_COOPERATION,
        title: 'Cooperation with organizations and foundations',
        text: 'We collaborate with other organizations and foundations to achieve common goals and maximize the impact of our charitable work. This includes joint fundraising campaigns, initiatives, and projects, as well as sharing of expertise.',
        alt: 'soldier',
        topic: {
          id: FilterItemTopicId.CooperationWithOrganizationsAndFoundations,
          valueEn: NewsTopics.CooperationWithOrganizationsAndFoundations,
          valueUk: NewsTopicsUk.CooperationWithOrganizationsAndFoundations,
        },
      },
    ],
  },
  latestNews: {
    title: 'Latest news',
    data: [
      {
        image: NEWS_IMAGES.FIRST_NEWS_IMG,
        tag: {
          id: FilterItemTagId.InFocus,
          valueEn: NewsTags.InFocus,
          valueUk: NewsTagsUk.InFocus,
        },
        title: '31st Economic Forum in Karpacz',
        data: 'September 29, 2022',
        dataIndex: 2,
        subtitle:
          'The forum was centered around discussions on some of the most pressing economic issues of our time, including energy security, innovations, the digital economy, and the impact of the Russian war invasion on global food security and the economy.',
        content: '/',
        topic: {
          id: FilterItemTopicId.Culture,
          valueEn: NewsTopics.Culture,
          valueUk: NewsTopicsUk.Culture,
        },
        project: {
          id: FilterItemProjectId.CrossMinistryRelations,
          valueEn: NewsProjects.CrossMinistryRelations,
          valueUk: NewsProjectsUk.CrossMinistryRelations,
        },
        format: {
          id: FilterItemFormatId.Event,
          valueEn: NewsFormats.Event,
          valueUk: NewsFormatsUk.Event,
        },
        path: '/news/1',
      },
      {
        image: NEWS_IMAGES.CHERNIHIV,
        tag: {
          id: FilterItemTagId.InFocus,
          valueEn: NewsTags.InFocus,
          valueUk: NewsTagsUk.InFocus,
        },
        title: 'The Story about Chernihiv',
        data: 'April 3, 2022',
        dataIndex: 4,
        subtitle:
          'Today, we would like to share a story of resilience and compassion - a story about delivering aid to the heroic city of Chernihiv at the beginning of the war.',
        content: '/',
        topic: [
          {
            id: FilterItemTopicId.Medical,
            valueEn: NewsTopics.Medical,
            valueUk: NewsTopicsUk.Medical,
          },
          {
            id: FilterItemTopicId.CooperationWithOrganizationsAndFoundations,
            valueEn: NewsTopics.CooperationWithOrganizationsAndFoundations,
            valueUk: NewsTopicsUk.CooperationWithOrganizationsAndFoundations,
          },
        ],
        project: [],
        format: {
          id: FilterItemFormatId.Story,
          valueEn: NewsFormats.Story,
          valueUk: NewsFormatsUk.Story,
        },
        path: '/news/2',
      },
      {
        image: NEWS_IMAGES.THIRD_NEWS_IMG,
        tag: {
          id: FilterItemTagId.MostRead,
          valueEn: NewsTags.MostRead,
          valueUk: NewsTagsUk.MostRead,
        },
        title:
          'The Discussion About Preservation of Cultural Heritage and Economic Cooperation of Poland and Ukraine in the Volyn Region',
        data: 'February 1, 2023',
        dataIndex: 1,
        subtitle:
          '"Stay With Ukraine", a non-profit organization committed to supporting Ukraine in times of crisis, recently participated with Daniel Dragan, a member of the Polish Sejm, in critical discussions with the governor of the Volyn region, Yuriy Pohulayko. The main agenda of the meeting was to deliberate on the preservation of shared cultural heritage between Poland and Ukraine in the Volyn region, as well as to address issues related to environmental protection and investment for a fruitful future cooperation between the two countries.',
        content: '/',
        topic: [
          {
            id: FilterItemTopicId.EconomicRevival,
            valueEn: NewsTopics.EconomicRevival,
            valueUk: NewsTopicsUk.EconomicRevival,
          },
          {
            id: FilterItemTopicId.InternationalAffairs,
            valueEn: NewsTopics.InternationalAffairs,
            valueUk: NewsTopicsUk.InternationalAffairs,
          },
        ],
        project: [
          {
            id: FilterItemProjectId.TwinCitiesAndRegions,
            valueEn: NewsProjects.TwinCitiesAndRegions,
            valueUk: NewsProjectsUk.TwinCitiesAndRegions,
          },
          {
            id: FilterItemProjectId.CrossMinistryRelations,
            valueEn: NewsProjects.CrossMinistryRelations,
            valueUk: NewsProjectsUk.CrossMinistryRelations,
          },
        ],
        format: {
          id: FilterItemFormatId.Event,
          valueEn: NewsFormats.Event,
          valueUk: NewsFormatsUk.Event,
        },
        path: '/news/3',
      },
      {
        image: NEWS_IMAGES.SENATE,
        tag: {
          id: FilterItemTagId.MostRead,
          valueEn: NewsTags.MostRead,
          valueUk: NewsTagsUk.MostRead,
        },
        title: 'The meeting in Senate of France',
        data: 'October 19, 2022',
        dataIndex: 3,
        subtitle: `Stay With Ukraine's recent visit to Paris was a crucial milestone in strengthening its international partnerships. The meeting with French Senator Jean-Yves Leconte at the Senate of France was undoubtedly one of the highlights of the trip, where they delved into the pressing issues of our times.`,
        content: '/',
        topic: {
          id: FilterItemTopicId.Culture,
          valueEn: NewsTopics.Culture,
          valueUk: NewsTopicsUk.Culture,
        },
        project: {
          id: FilterItemProjectId.CrossMinistryRelations,
          valueEn: NewsProjects.CrossMinistryRelations,
          valueUk: NewsProjectsUk.CrossMinistryRelations,
        },
        format: {
          id: FilterItemFormatId.Event,
          valueEn: NewsFormats.Event,
          valueUk: NewsFormatsUk.Event,
        },
        path: '/news/4',
      },
    ],
  },
  ourFriends: {
    title: 'Our friends',
    data: [
      {
        id: 'atp',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsEnCategories.Charities],
      },
      {
        id: 'c-w-obel',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsEnCategories.Culture],
      },
      {
        id: 'pension',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsEnCategories.BussinessWorldwide],
      },
      {
        id: 'pfa',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsEnCategories.GovernmentalOrganizations],
      },
      {
        id: 'atp1',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsEnCategories.Charities],
      },
      {
        id: 'c-w-obel1',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsEnCategories.Culture],
      },
      {
        id: 'pension1',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsEnCategories.BussinessWorldwide],
      },
      {
        id: 'pfa1',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsEnCategories.GovernmentalOrganizations],
      },
      {
        id: 'atp2',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsEnCategories.Charities],
      },
      {
        id: 'c-w-obel2',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsEnCategories.Culture],
      },
      {
        id: 'pension2',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsEnCategories.BussinessWorldwide],
      },
      {
        id: 'pfa2',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsEnCategories.GovernmentalOrganizations],
      },
      {
        id: 'atp3',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsEnCategories.Charities],
      },
      {
        id: 'c-w-obel3',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsEnCategories.Culture],
      },
      {
        id: 'pension3',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsEnCategories.BussinessWorldwide],
      },
      {
        id: 'pfa3',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsEnCategories.GovernmentalOrganizations],
      },
      {
        id: 'atp4',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsEnCategories.Charities],
      },
      {
        id: 'c-w-obel4',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsEnCategories.Culture],
      },
      {
        id: 'pension4',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsEnCategories.BussinessWorldwide],
      },
      {
        id: 'pfa4',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsEnCategories.GovernmentalOrganizations],
      },
      {
        id: 'atp5',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsEnCategories.Charities],
      },
      {
        id: 'c-w-obel5',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsEnCategories.Culture],
      },
      {
        id: 'pension5',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsEnCategories.BussinessWorldwide],
      },
      {
        id: 'pfa5',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsEnCategories.GovernmentalOrganizations],
      },
      {
        id: 'c-w-obel6',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsEnCategories.Culture],
      },
    ],
  },
  theyAreWithUs: {
    title: 'They are with us',
    data: [
      {
        person: {
          photo: WITH_US_IMAGES.ASHTON_KUTCHER,
          name: 'Ashton Kutcher',
          occupation: 'American actor',
          text: 'launched a campaign to raise $30 million for the Flexport Charitable Foundation',
        },
        tags: [
          TheyAreWithUsEnTags.All,
          TheyAreWithUsEnTags.Culture,
          TheyAreWithUsEnTags.Bussiness,
        ],
        locationTags: [
          TheyAreWithUsLocationEnTags.All,
          TheyAreWithUsLocationEnTags.Usa,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.SOME_GUY,
          name: 'Some Guy',
          occupation: 'Just some guy',
        },
        tags: [
          TheyAreWithUsEnTags.All,
          TheyAreWithUsEnTags.Culture,
          TheyAreWithUsEnTags.Press,
        ],
        locationTags: [
          TheyAreWithUsLocationEnTags.All,
          TheyAreWithUsLocationEnTags.Germany,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.JELENA_NOURA,
          name: 'Jelena Nora',
          occupation: 'French senator',
          text: 'launched a campaign to raise $30 million for the Flexport Charitable Foundation',
        },
        tags: [TheyAreWithUsEnTags.All, TheyAreWithUsEnTags.Culture],
        locationTags: [
          TheyAreWithUsLocationEnTags.All,
          TheyAreWithUsLocationEnTags.France,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.SOME_GUY,
          name: 'Some Guy 2',
          occupation: 'Just some guy2',
        },
        tags: [TheyAreWithUsEnTags.All, TheyAreWithUsEnTags.Policy],
        locationTags: [
          TheyAreWithUsLocationEnTags.All,
          TheyAreWithUsLocationEnTags.Ukraine,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.ASHTON_KUTCHER,
          name: 'Ashton Butcher',
          occupation: 'Occupation',
        },
        tags: [TheyAreWithUsEnTags.All, TheyAreWithUsEnTags.Science],
        locationTags: [
          TheyAreWithUsLocationEnTags.All,
          TheyAreWithUsLocationEnTags.UnitedKingdom,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.JELENA_NOURA,
          name: 'Test',
          occupation: 'test',
        },
        tags: [TheyAreWithUsEnTags.All, TheyAreWithUsEnTags.Bussiness],
        locationTags: [
          TheyAreWithUsLocationEnTags.All,
          TheyAreWithUsLocationEnTags.Portugal,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.ASHTON_KUTCHER,
          name: 'Ashton Kutcher245',
          occupation: 'American actor!',
          text: 'launched a campaign to raise $30 million for the Flexport Charitable Foundation',
        },
        tags: [TheyAreWithUsEnTags.All, TheyAreWithUsEnTags.Culture],
        locationTags: [
          TheyAreWithUsLocationEnTags.All,
          TheyAreWithUsLocationEnTags.France,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.ASHTON_KUTCHER,
          name: 'Test test',
          occupation: 'American actor',
          text: 'launched a campaign to raise $30 million for the Flexport Charitable Foundation',
        },
        tags: [
          TheyAreWithUsEnTags.All,
          TheyAreWithUsEnTags.Bussiness,
          TheyAreWithUsEnTags.Culture,
          TheyAreWithUsEnTags.Policy,
          TheyAreWithUsEnTags.Press,
          TheyAreWithUsEnTags.Science,
        ],
        locationTags: [
          TheyAreWithUsLocationEnTags.All,
          TheyAreWithUsLocationEnTags.Usa,
          TheyAreWithUsLocationEnTags.France,
          TheyAreWithUsLocationEnTags.Germany,
          TheyAreWithUsLocationEnTags.Portugal,
          TheyAreWithUsLocationEnTags.Ukraine,
        ],
      },
    ],
  },
  mediaAboutUs: {
    title: 'Media about us',
  },
  excitements: {
    title: 'Our recent excitements',
  },
  map: {
    title: "Get in touch with us",
    subtitle:
      `Share your ideas on helping Ukraine or join our ongoing projects.`,
    buttonText: 'Contact',
    markers: [
      {
        left: '56%',
        top: '32%',
        country: 'Ukraine',
        location: 'Kyiv',
      },
    ],
  },
  footer: {
    email: 'Email',
    phone: 'Phone',
    //! TODO: Uncomment the items when they are needed!
    links: [
      // {
      //   name: 'About us',
      //   path: '/aboutUs',
      //   id: 'aboutUs',
      // },
      // {
      //   name: 'Projects',
      //   path: '/projects',
      //   id: 'projects',
      // },
      {
        name: 'News',
        path: '/news',
        id: 'news',
      },
      // {
      //   name: 'Eternal Glory ',
      //   path: '/externalGlory',
      //   id: 'externalGlory',
      // },
      {
        name: 'Contact',
        path: '/contact',
        id: 'contact',
      },
      {
        name: 'Help Ukraine',
        path: '/help-Ukraine',
        id: 'helpUkraine',
      },
    ],
    subscribeText: 'Subscribe to newsletter',
    placeholder: 'Your email',
    buttonText: 'Subscribe',
  },
  flagBlock: {
    title: 'news',
    placeholder: 'Search by tag, topic',
  },
  contact: {
    title: 'Get in touch with us',
    subtitle: `Share your ideas on helping Ukraine or join our ongoing projects.`,
    buttonText: 'Send',
    inputs: [
      { placeholder: GridNamesEn.FIRST_NAME, name: 'firstName' },
      { placeholder: GridNamesEn.LAST_NAME, name: 'lastName' },
      { placeholder: GridNamesEn.EMAIL, name: 'email' },
      { placeholder: GridNamesEn.PHONE, name: 'phone' },
      { placeholder: GridNamesEn.ORGANIZATION, name: 'organization' },
      { placeholder: GridNamesEn.MESSAGE, name: 'message' },
    ],
  },
  newsFilters: {
    topics: [
      {
        id: FilterItemTopicId.All,
        valueEn: NewsTopics.All,
        valueUk: NewsTopicsUk.All,
      },
      {
        id: FilterItemTopicId.CooperationWithBusiness,
        valueEn: NewsTopics.CooperationWithBusiness,
        valueUk: NewsTopicsUk.CooperationWithBusiness,
      },
      {
        id: FilterItemTopicId.InternationalAffairs,
        valueEn: NewsTopics.InternationalAffairs,
        valueUk: NewsTopicsUk.InternationalAffairs,
      },
      {
        id: FilterItemTopicId.EconomicRevival,
        valueEn: NewsTopics.EconomicRevival,
        valueUk: NewsTopicsUk.EconomicRevival,
      },
      {
        id: FilterItemTopicId.Culture,
        valueEn: NewsTopics.Culture,
        valueUk: NewsTopicsUk.Culture,
      },
      {
        id: FilterItemTopicId.TheClubOfFriendsOfUkraine,
        valueEn: NewsTopics.TheClubOfFriendsOfUkraine,
        valueUk: NewsTopicsUk.TheClubOfFriendsOfUkraine,
      },
      {
        id: FilterItemTopicId.Media,
        valueEn: NewsTopics.Media,
        valueUk: NewsTopicsUk.Media,
      },
      {
        id: FilterItemTopicId.Medical,
        valueEn: NewsTopics.Medical,
        valueUk: NewsTopicsUk.Medical,
      },
      {
        id: FilterItemTopicId.CooperationWithOrganizationsAndFoundations,
        valueEn: NewsTopics.CooperationWithOrganizationsAndFoundations,
        valueUk: NewsTopicsUk.CooperationWithOrganizationsAndFoundations,
      },
    ],
    projects: [
      {
        id: FilterItemProjectId.All,
        valueEn: NewsProjects.All,
        valueUk: NewsProjectsUk.All,
      },
      {
        id: FilterItemProjectId.CrossMinistryRelations,
        valueEn: NewsProjects.CrossMinistryRelations,
        valueUk: NewsProjectsUk.CrossMinistryRelations,
      },
      {
        id: FilterItemProjectId.TwinCitiesAndRegions,
        valueEn: NewsProjects.TwinCitiesAndRegions,
        valueUk: NewsProjectsUk.TwinCitiesAndRegions,
      },
    ],
    tags: [
      {
        id: FilterItemTagId.Latest,
        valueEn: NewsTags.Latest,
        valueUk: NewsTagsUk.Latest,
      },
      {
        id: FilterItemTagId.InFocus,
        valueEn: NewsTags.InFocus,
        valueUk: NewsTagsUk.InFocus,
      },
      {
        id: FilterItemTagId.MostRead,
        valueEn: NewsTags.MostRead,
        valueUk: NewsTagsUk.MostRead,
      },
      {
        id: FilterItemTagId.Oldest,
        valueEn: NewsTags.Oldest,
        valueUk: NewsTagsUk.Oldest,
      },
    ],
    formats: [
      {
        id: FilterItemFormatId.All,
        valueEn: NewsFormats.All,
        valueUk: NewsFormatsUk.All,
      },
      {
        id: FilterItemFormatId.Campaign,
        valueEn: NewsFormats.Campaign,
        valueUk: NewsFormatsUk.Campaign,
      },
      {
        id: FilterItemFormatId.Interview,
        valueEn: NewsFormats.Interview,
        valueUk: NewsFormatsUk.Interview,
      },
      {
        id: FilterItemFormatId.Meeting,
        valueEn: NewsFormats.Meeting,
        valueUk: NewsFormatsUk.Meeting,
      },
      {
        id: FilterItemFormatId.Event,
        valueEn: NewsFormats.Event,
        valueUk: NewsFormatsUk.Event,
      },
      {
        id: FilterItemFormatId.Report,
        valueEn: NewsFormats.Report,
        valueUk: NewsFormatsUk.Report,
      },
      {
        id: FilterItemFormatId.Story,
        valueEn: NewsFormats.Story,
        valueUk: NewsFormatsUk.Story,
      },
      {
        id: FilterItemFormatId.InTheMedia,
        valueEn: NewsFormats.InTheMedia,
        valueUk: NewsFormatsUk.InTheMedia,
      },
      {
        id: FilterItemFormatId.ProjectUpdate,
        valueEn: NewsFormats.ProjectUpdate,
        valueUk: NewsFormatsUk.ProjectUpdate,
      },
      {
        id: FilterItemFormatId.Speech,
        valueEn: NewsFormats.Speech,
        valueUk: NewsFormatsUk.Speech,
      },
      {
        id: FilterItemFormatId.Statement,
        valueEn: NewsFormats.Statement,
        valueUk: NewsFormatsUk.Statement,
      },
    ],
  },
  talkAboutFuture: {
    title: "Get in touch with us",
    subtitle:
      `Share your ideas on helping Ukraine or join our ongoing projects.`,
    buttonText: 'Contact',
  },
  helpUkraine: {
    title: 'Help Ukraine',
    selectItems: [
      {
        id: HelpUkraineSelectId.PersonalInvolvement,
        valueEn: HelpUkraineSelectItems.PersonalInvolvement,
        valueUk: HelpUkraineSelectItemsUk.PersonalInvolvement,
      },
      {
        id: HelpUkraineSelectId.FinancialAssistance,
        valueEn: HelpUkraineSelectItems.FinancialAssistance,
        valueUk: HelpUkraineSelectItemsUk.FinancialAssistance,
      },
    ],
  },
};

export default modules;
