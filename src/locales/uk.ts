import {
  OurFriendsUkCategories,
  TheyAreWithUsLocationUkTags,
  TheyAreWithUsUkTags,
} from '@/data';
import { GridNamesUk } from '@/pagesTypes/Contact.types';
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
        name: 'Новини',
        path: '/news',
        id: 'news',
      },
      // {
      //   name: 'Eternal Glory ',
      //   path: '/externalGlory',
      //   id: 'externalGlory',
      // },
      {
        name: 'Контакти',
        path: '/contact',
        id: 'contact',
      },
    ],
    button: {
      name: 'Допоможіть Україні',
      path: '/help-Ukraine',
      id: 'helpUkraine',
    },
  },
  stayWithUa: {
    subtitle:
      'Організація була створена з єдиною метою - врятувати якомога більше життів.',
    helpButton: 'Я хочу допомогти',
  },
  areasOfActivity: {
    title: 'Наші напрямки діяльності',
    subtitle:
      'Вони можуть забрати наше життя, але вони ніколи не заберуть нашу свободу.',
    items: [
      {
        image: IMAGES.AOA_BUSINESS_COOPERATION,
        title: 'Співпраця з бізнесом',
        text: 'У нас є унікальна програма, спеціально розроблена для співпраці з бізнесом та збору коштів для України без значної фінансової участі або порушення планів щодо прибутку та доходів. Ця програма також надає можливості для медіа-опрацювання, залучення відомих осіб та посольств, участі споживачів та покращення лояльності до бренду.',
        alt: 'солдат',
        topic: {
          id: FilterItemTopicId.CooperationWithBusiness,
          valueEn: NewsTopics.CooperationWithBusiness,
          valueUk: NewsTopicsUk.CooperationWithBusiness,
        },
      },
      {
        image: IMAGES.AOA_INTERNATIONAL_AFFAIRS,
        title: 'Міжнародні відносини',
        text: 'Ми проводимо кілька проектів, спрямованих на підтримку розвитку та процвітання України, а також на зміцнення відносин з країнами по всьому світу, узгоджуючи домовленості з видатними представниками різних урядових організацій.',
        alt: 'солдат',
        topic: {
          id: FilterItemTopicId.InternationalAffairs,
          valueEn: NewsTopics.InternationalAffairs,
          valueUk: NewsTopicsUk.InternationalAffairs,
        },
      },
      {
        image: IMAGES.AOA_ECONOMIC_REVIVAL,
        image_mobile: IMAGES.AOA_ECONOMIC_REVIVAL_MOBILE,
        title: 'Економічне відродження',
        text: "Ми демонструємо потенціал України для економічного зростання перед великими корпораціями по всьому світу, наголошуючи на тому, що інвестування в Україну та створення робочих місць підвищує їхню глобальну репутацію та демонструє їхню зобов'язаність до сталого розвитку та підтримки тих, хто постраждав від російських злочинів.",
        alt: 'офіс',
        topic: {
          id: FilterItemTopicId.EconomicRevival,
          valueEn: NewsTopics.EconomicRevival,
          valueUk: NewsTopicsUk.EconomicRevival,
        },
      },
      {
        image: IMAGES.AOA_CULTURE,
        image_mobile: IMAGES.AOA_CULTURE_MOBILE,
        title: 'Культура',
        text: 'Наша організація присвячена проведенню проектів, які сприяють збереженню спадщини української культури та передачі її майбутнім поколінням, а також демонструванню її краси світу шляхом організації виставок, виступів та концертів та запрошенням на участь та підтримку України відомих міжнародних діячів.',
        alt: 'руїни',
        topic: {
          id: FilterItemTopicId.Culture,
          valueEn: NewsTopics.Culture,
          valueUk: NewsTopicsUk.Culture,
        },
      },
      {
        image: IMAGES.AOA_CLUB_OF_FRIENDS,
        title: 'Клуб друзів України',
        text: "Наша організація об'єднує справжніх прихильників України та виняткових українців з усього світу, створюючи потужну мережу, яка співпрацює у міжнародних справах, благодійних проектах, а також в економічному відновленні та реконструкції України.",
        alt: 'солдат',
        topic: {
          id: FilterItemTopicId.TheClubOfFriendsOfUkraine,
          valueEn: NewsTopics.TheClubOfFriendsOfUkraine,
          valueUk: NewsTopicsUk.TheClubOfFriendsOfUkraine,
        },
      },
      {
        image: IMAGES.AOA_MEDIA,
        image_mobile: IMAGES.AOA_MEDIA_MOBILE,
        title: 'Медіа',
        text: 'Ми підкреслюємо героїчні подвиги українців, що захищають свою країну, а також історії злочинів, вчинених росіянами, підкреслюємо вплив тих, хто допоміг Україні в її найтемніші часи, і доповідаємо про успіхи та нові проекти нашої організації.',
        alt: 'конференція',
        topic: {
          id: FilterItemTopicId.Media,
          valueEn: NewsTopics.Media,
          valueUk: NewsTopicsUk.Media,
        },
      },
      {
        image: IMAGES.AOA_MEDICAL,
        title: 'Медична допомога',
        text: "Наша організація присвячена наданню медичної допомоги та підтримки постраждалим від війни в Україні через ініціативи, такі як мобільні клініки, медичне обладнання та транспортні засоби, а також послуги психічного здоров'я.",
        alt: 'солдат',
        topic: {
          id: FilterItemTopicId.Medical,
          valueEn: NewsTopics.Medical,
          valueUk: NewsTopicsUk.Medical,
        },
      },
      {
        image: IMAGES.AOA_COOPERATION,
        title: 'Співпраця з організаціями та фондами',
        text: 'Ми співпрацюємо з іншими організаціями та фондами, щоб досягти спільних цілей та максимізувати вплив нашої благодійної діяльності. Це включає спільні кампанії зі збору коштів, ініціативи та проекти, а також обмін експертизою.',
        alt: 'солдат',
        topic: {
          id: FilterItemTopicId.CooperationWithOrganizationsAndFoundations,
          valueEn: NewsTopics.CooperationWithOrganizationsAndFoundations,
          valueUk: NewsTopicsUk.CooperationWithOrganizationsAndFoundations,
        },
      },
    ],
  },
  latestNews: {
    title: 'Останні новини',
    data: [
      {
        image: NEWS_IMAGES.FIRST_NEWS_IMG,
        tag: {
          id: FilterItemTagId.InFocus,
          valueEn: NewsTags.InFocus,
          valueUk: NewsTagsUk.InFocus,
        },
        title: '31-й економічний форум у Карпачі',
        data: '29 вересня 2022',
        dataIndex: 2,
        subtitle:
          'Форум був спрямований на обговорення найбільш актуальних економічних питань нашого часу, таких як енергетична безпека, інновації, цифрова економіка та вплив російської військової агресії на глобальну продовольчу безпеку та економіку.',
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
        title: 'Історія про Чернігів',
        data: '3 квітня 2022р',
        dataIndex: 4,
        subtitle:
          'Сьогодні ми хотіли б розповісти історію стійкості та співчуття - історію про доставку допомоги героїчному місту Чернігів на початку війни.',
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
          'Обговорення збереження культурної спадщини та економічної співпраці Польщі та України в Волинському регіоні.',
        data: '1 Лютого 2023р',
        dataIndex: 1,
        subtitle: `"Залишайся з Україною", неприбуткова організація, яка зобов'язується підтримувати Україну в часи кризи, нещодавно брала участь разом із Даніелем Драганом, членом польського Сейму, у важливих дискусіях з головою Волинської області, Юрієм Погуляйком. Основне завдання зустрічі полягало в розгляді питань збереження спільної культурної спадщини між Польщею та Україною в регіоні Волині, а також у вирішенні питань, пов'язаних з охороною навколишнього середовища та інвестиціями для плідної майбутньої співпраці між двома країнами.`,
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
        title: 'Засідання у Сенаті Франції',
        data: '19 Жовтня 2022',
        dataIndex: 3,
        subtitle:
          'Нещодавній візит Stay With Ukraine до Парижа був важливим кроком на шляху до зміцнення її міжнародних партнерств. Зустріч з французьким сенатором Жан-Івом Леконте в Сенаті Франції незаперечно стала однією з найбільш яскравих подій поїздки, під час якої було порушено актуальні проблеми наших днів.',
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
    title: 'Наші друзі',
    data: [
      {
        id: 'atp',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsUkCategories.Charities],
      },
      {
        id: 'c-w-obel',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsUkCategories.Culture],
      },
      {
        id: 'pension',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsUkCategories.BussinessWorldwide],
      },
      {
        id: 'pfa',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsUkCategories.GovernmentalOrganizations],
      },
      {
        id: 'atp1',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsUkCategories.Charities],
      },
      {
        id: 'c-w-obel1',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsUkCategories.Culture],
      },
      {
        id: 'pension1',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsUkCategories.BussinessWorldwide],
      },
      {
        id: 'pfa1',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsUkCategories.GovernmentalOrganizations],
      },
      {
        id: 'atp2',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsUkCategories.Charities],
      },
      {
        id: 'c-w-obel2',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsUkCategories.Culture],
      },
      {
        id: 'pension2',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsUkCategories.BussinessWorldwide],
      },
      {
        id: 'pfa2',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsUkCategories.GovernmentalOrganizations],
      },
      {
        id: 'atp3',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsUkCategories.Charities],
      },
      {
        id: 'c-w-obel3',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsUkCategories.Culture],
      },
      {
        id: 'pension3',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsUkCategories.BussinessWorldwide],
      },
      {
        id: 'pfa3',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsUkCategories.GovernmentalOrganizations],
      },
      {
        id: 'atp4',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsUkCategories.Charities],
      },
      {
        id: 'c-w-obel4',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsUkCategories.Culture],
      },
      {
        id: 'pension4',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsUkCategories.BussinessWorldwide],
      },
      {
        id: 'pfa4',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsUkCategories.GovernmentalOrganizations],
      },
      {
        id: 'atp5',
        image: FRIENDS_IMAGES.ATP,
        tags: [OurFriendsUkCategories.Charities],
      },
      {
        id: 'c-w-obel5',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsUkCategories.Culture],
      },
      {
        id: 'pension5',
        image: FRIENDS_IMAGES.PENSION,
        tags: [OurFriendsUkCategories.BussinessWorldwide],
      },
      {
        id: 'pfa5',
        image: FRIENDS_IMAGES.PFA,
        tags: [OurFriendsUkCategories.GovernmentalOrganizations],
      },
      {
        id: 'c-w-obel6',
        image: FRIENDS_IMAGES.C_W_OBEL,
        tags: [OurFriendsUkCategories.Culture],
      },
    ],
  },
  theyAreWithUs: {
    title: 'Вони з нами',
    data: [
      {
        person: {
          photo: WITH_US_IMAGES.ASHTON_KUTCHER,
          name: 'Ashton Kutcher',
          occupation: 'American actor',
          text: 'launched a campaign to raise $30 million for the Flexport Charitable Foundation',
        },
        tags: [TheyAreWithUsUkTags.All, TheyAreWithUsUkTags.Culture],
        locationTags: [
          TheyAreWithUsLocationUkTags.All,
          TheyAreWithUsLocationUkTags.Usa,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.SOME_GUY,
          name: 'Some Guy',
          occupation: 'Just some guy',
        },
        tags: [
          TheyAreWithUsUkTags.All,
          TheyAreWithUsUkTags.Culture,
          TheyAreWithUsUkTags.Press,
        ],
        locationTags: [
          TheyAreWithUsLocationUkTags.All,
          TheyAreWithUsLocationUkTags.Germany,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.JELENA_NOURA,
          name: 'Jelena Nora',
          occupation: 'French senator',
          text: 'launched a campaign to raise $30 million for the Flexport Charitable Foundation',
        },
        tags: [TheyAreWithUsUkTags.All, TheyAreWithUsUkTags.Culture],
        locationTags: [
          TheyAreWithUsLocationUkTags.All,
          TheyAreWithUsLocationUkTags.France,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.SOME_GUY,
          name: 'Some Guy 2',
          occupation: 'Just some guy2',
        },
        tags: [TheyAreWithUsUkTags.All, TheyAreWithUsUkTags.Policy],
        locationTags: [
          TheyAreWithUsLocationUkTags.All,
          TheyAreWithUsLocationUkTags.Ukraine,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.ASHTON_KUTCHER,
          name: 'Ashton Butcher',
          occupation: 'Occupation',
        },
        tags: [TheyAreWithUsUkTags.All, TheyAreWithUsUkTags.Science],
        locationTags: [
          TheyAreWithUsLocationUkTags.All,
          TheyAreWithUsLocationUkTags.UnitedKingdom,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.JELENA_NOURA,
          name: 'Test',
          occupation: 'test',
        },
        tags: [TheyAreWithUsUkTags.All, TheyAreWithUsUkTags.Bussiness],
        locationTags: [
          TheyAreWithUsLocationUkTags.All,
          TheyAreWithUsLocationUkTags.Portugal,
        ],
      },
      {
        person: {
          photo: WITH_US_IMAGES.ASHTON_KUTCHER,
          name: 'Ashton Kutcher245',
          occupation: 'American actor!',
          text: 'launched a campaign to raise $30 million for the Flexport Charitable Foundation',
        },
        tags: [TheyAreWithUsUkTags.All, TheyAreWithUsUkTags.Culture],
        locationTags: [
          TheyAreWithUsLocationUkTags.All,
          TheyAreWithUsLocationUkTags.France,
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
          TheyAreWithUsUkTags.All,
          TheyAreWithUsUkTags.Bussiness,
          TheyAreWithUsUkTags.Culture,
          TheyAreWithUsUkTags.Policy,
          TheyAreWithUsUkTags.Press,
          TheyAreWithUsUkTags.Science,
        ],
        locationTags: [
          TheyAreWithUsLocationUkTags.All,
          TheyAreWithUsLocationUkTags.Usa,
          TheyAreWithUsLocationUkTags.France,
          TheyAreWithUsLocationUkTags.Germany,
          TheyAreWithUsLocationUkTags.Portugal,
          TheyAreWithUsLocationUkTags.Ukraine,
        ],
      },
    ],
  },
  mediaAboutUs: {
    title: 'Медіа про нас',
  },
  excitements: {
    title: 'Наші недавні захоплення',
  },
  map: {
    title: `Зв'яжіться з нами`,
    subtitle:
      `Поділіться своїми ідеями щодо допомоги Україні або приєднайтеся до наших проектів, які вже тривають.`,
    buttonText: "Зв'язатися з нами",
    markers: [
      {
        left: '56%',
        top: '32%',
        country: 'Україна',
        location: 'Київ',
      },
    ],
  },
  footer: {
    email: 'Електронна пошта',
    phone: 'Телефон',
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
        name: 'Новини',
        path: '/news',
        id: 'news',
      },
      // {
      //   name: 'Eternal Glory ',
      //   path: '/externalGlory',
      //   id: 'externalGlory',
      // },
      {
        name: 'Контакти',
        path: '/contact',
        id: 'contact',
      },
      {
        name: 'Допоможіть Україні',
        path: '/help-Ukraine',
        id: 'helpUkraine',
      },
    ],
    subscribeText: 'Підписатися на розсилку новин',
    placeholder: 'Електронна пошта',
    buttonText: 'Підписатися',
  },
  flagBlock: {
    title: 'новини',
    placeholder: 'Пошук за тегом, темою',
  },
  contact: {
    title: "Зв'яжіться з нами",
    subtitle: `Поділіться своїми ідеями щодо допомоги Україні або приєднайтеся до наших проектів, які вже тривають.`,
    buttonText: 'Надіслати',
    inputs: [
      { placeholder: GridNamesUk.FIRST_NAME, name: 'firstName' },
      { placeholder: GridNamesUk.LAST_NAME, name: 'lastName' },
      { placeholder: GridNamesUk.EMAIL, name: 'email' },
      { placeholder: GridNamesUk.PHONE, name: 'phone' },
      { placeholder: GridNamesUk.ORGANIZATION, name: 'organization' },
      { placeholder: GridNamesUk.MESSAGE, name: 'message' },
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
    title: `Зв'яжіться з нами`,
    subtitle:
      `Поділіться своїми ідеями щодо допомоги Україні або приєднайтеся до наших проектів, які вже тривають.`,
    buttonText: 'Звʼязатись',
  },
  helpUkraine: {
    title: 'Допоможіть Україні',
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
