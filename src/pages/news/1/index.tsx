import { useMemo } from 'react';
import Slider, { Settings } from 'react-slick';
import { map } from 'lodash';
import Link from 'next/link';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share';

import { MetaLayer, SampleArrow, TheyAreWithUsPersonType } from '@/components';
import { TEXT_PRESETS } from '@/components/ExtendedText/ExtendedText.types';
import { NewsItem, SmallNewsItem } from '@/components/NewsComponents';
import { TheyAreWithUsItem } from '@/components/TheyAreWithUsItem';
import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
import {
  newsItemPagePersonsArr_DUMMY1,
  newsItemPagePersonsArr_DUMMY2,
} from '@/pagesData/newsItemPage1.dummy';
import { COLORS } from '@/utils/colors';

import { ICONS } from '../../../../public/icons';
import { NEWS_IMAGES } from '../../../../public/images';
import {
  StyledAlsoContainer,
  StyledBackContainer,
  StyledBackText,
  StyledContentContainer,
  StyledDataText,
  StyledIcon,
  StyledImage,
  StyledMainContainer,
  StyledNameText,
  StyledNewsContainer,
  StyledNewsLink,
  StyledPersonsContainer,
  StyledReadAlsoText,
  StyledReadAlsoTitlesContainer,
  StyledSeeAllNewsContainer,
  StyledShareBlock,
  StyledShareIcon,
  StyledShareText,
  StyledText,
  StyledTitle,
} from '../../../pagesStyles/NewsItemPage.styles';

const NewsItemPage1: React.FC = () => {
  const locale = getLocale();
  const { latestNews } = strings[locale];
  const { width } = useWindowDimensions();
  const screenWidthCheck = width && width < 900;
  const windowsWidthCheck = width && width > 800;

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: true,
    nextArrow: <SampleArrow icon={ICONS.ARROW_LEFT_LIGHT_SVG} isLeft={false} />,
    prevArrow: <SampleArrow icon={ICONS.ARROW_LEFT_LIGHT_SVG} isLeft={true} />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderSecondaryNews = useMemo((): JSX.Element[] => {
    const mainNewsTitle =
      locale === 'en'
        ? '31st Economic Forum in Karpacz'
        : '31-й економічний форум у Карпачі';
    let filteredNews = latestNews.data.filter(
      (item) => item.title !== mainNewsTitle,
    );
    const randomNews = filteredNews.slice(0, 3);
    return map(randomNews, (item, index) => (
      <Link
        href={item.path}
        key={`small-news-item-news-${item.title}-${item.data}-${index}`}
      >
        {windowsWidthCheck ? (
          <NewsItem isInNewsItem={true} data={item} />
        ) : (
          <SmallNewsItem data={item} />
        )}
      </Link>
    ));
  }, [latestNews.data, locale, windowsWidthCheck]);

  const renderPersons = (items: TheyAreWithUsPersonType[]) =>
    map(items, (item, index) => (
      <TheyAreWithUsItem
        key={`newsItemPage1-carousel-item-${item.name}-${index}`}
        data={item}
      />
    ));

  return (
    <MetaLayer
      title={locale === 'en' ? '31st Economic Forum in Karpacz | Stay UA' : '31-й економічний форум у Карпачі | Stay UA'}
      description={locale === 'en' ? 'Stay With Ukraine organization attended the 31st Economic Forum in Karpacz, engaging with government, business, and experts.' : 'Організація Stay With Ukraine відвідала 31-й Економічний форум у Карпачі. Спілкувались із урядом, бізнесом та експертами.'}
      backgroundColor={COLORS.WHITE}
      currentPage='1'
      headerStyle='black'
      headChildren={
        <>
          <link rel="alternate" hrefLang="en" href="https://www.stayua.com/news/1" />
          <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/news/1" />
        </>
      }
    >
      <StyledMainContainer>
        <StyledContentContainer>
          <Link href='/news'>
            <StyledBackContainer>
              <StyledIcon src={ICONS.ARROW_LEFT_DARK} alt='arrow' />
              <StyledBackText preset={TEXT_PRESETS.SEMIBOLD_15}>
                {locale === 'en'
                  ? 'Back to all news'
                  : 'Повернутись до всіх новин'}
              </StyledBackText>
            </StyledBackContainer>
          </Link>
          <StyledImage alt='president' src={NEWS_IMAGES.FIRST_NEWS_IMG} />
          <StyledDataText preset={TEXT_PRESETS.REG_16}>
            {locale === 'en' ? `29 September 2022` : `29 Вересня 2022р`}
          </StyledDataText>
          <StyledTitle>
            {locale === 'en'
              ? '31st Economic Forum in Karpacz'
              : '31-й економічний форум у Карпачі'}
          </StyledTitle>
          <StyledText>
            {locale === 'en'
              ? 'The Stay With Ukraine organization had the pleasure of attending the 31st Economic Forum in Karpacz, where they engaged with an esteemed group of individuals from government, business, and various fields of expertise.'
              : 'Організація "The Stay With Ukraine" мала приємну можливість взяти участь у 31-му Економічному форумі у Карпачі, де вони спілкувалися з високоповажними особистостями з уряду, бізнесу та різних галузей експертизи.'}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'The forum was centered around discussions on some of the most pressing economic issues of our time, including energy security, innovations, the digital economy, and the impact of the Russian war invasion on global food security and the economy.'
              : 'Форум був спрямований на обговорення найбільш актуальних економічних питань нашого часу, таких як енергетична безпека, інновації, цифрова економіка та вплив російської військової агресії на глобальну продовольчу безпеку та економіку.'}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'During their visit, the team had the distinct honor of engaging in conversations with a diverse group of individuals.'
              : 'Під час свого візиту команда мала велику честь спілкуватися з різноманітною групою людей.'}
          </StyledText>
          {locale === 'en' ? (
            <StyledText>
              Among them were former UK National Security Minister,{' '}
              {<StyledNameText>Gerald Howarth</StyledNameText>}, and the fourth
              president of Croatia,
              {<StyledNameText> Kolinda Grabar-Kitarović</StyledNameText>}.
            </StyledText>
          ) : (
            <StyledText>
              Серед них були колишній міністр національної безпеки
              Великобританії {<StyledNameText>Джеральд Ховарт</StyledNameText>}{' '}
              та четвертий президент Хорватії{' '}
              {<StyledNameText>Колінда Грабар-Китаровіч</StyledNameText>}.
            </StyledText>
          )}
          <StyledText>
            {locale === 'en'
              ? 'They also had the opportunity to speak with a range of Polish officials, including the Minister of Infrastructure, Andrzej Adamczyk, the Minister of Health, Adam Niedzielski, the Minister of Education, Przemysław Czarnek, the Deputy-Mayor of Wroclaw, Jakub Mazur, the member of Sejm of the Republic of Poland Kacper Plazynski and the Secretary of State of the Ministry of National Defence, Marcin Ociepa.'
              : "Також вони мали можливість поспілкуватися з різними посадовцями Польщі, включаючи Міністра інфраструктури Анджея Адамчика, Міністра охорони здоров'я Адама Нєдзєльского, Міністра освіти Пшемислава Чарнека, заступника мера Вроцлава Якуба Мазура, члена Сейму Республіки Польща Кацпера Плазинського та державного секретаря Міністерства національної оборони Марціна Оцєпи."}
          </StyledText>
          <StyledPersonsContainer isSmallWidth={screenWidthCheck}>
            <Slider {...settings}>
              {renderPersons(newsItemPagePersonsArr_DUMMY1)}
            </Slider>
          </StyledPersonsContainer>
          <StyledText>
            {locale === 'en'
              ? 'Other notable figures included the Vice-Minister of Transport and Communications of Lithuania, Julius Skackauskas, the co-founder of CORE Response Foundation Ann Lee, the CEO of the Direct Relief Foundation Thomas Tighe.'
              : "Серед інших значущих осіб були Віце-міністр транспорту та зв'язку Литви Юліус Шкакаускас, співзасновник фонду CORE Response Анн Лі, генеральний директор фонду Direct Relief Томас Тайг, та генеральний директор."}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'The team also had conversations with Jovan Protic, the COO of Axel Springer Polska, and Wieslaw Rozlucki, a Polish economist, co-founder of the Warsaw Stock Exchange, and senior advisor of Rothschild & Co.'
              : "Команда також спілкувалася з Йованом Протичем, генеральним директором Axel Springer Polska, та В'ячеславом Роздоцьким, польським економістом, співзасновником Варшавської фондової біржі та старшим радником Rothschild & Co."}
          </StyledText>
          <StyledPersonsContainer isSmallWidth={screenWidthCheck}>
            <Slider {...settings}>
              {renderPersons(newsItemPagePersonsArr_DUMMY2)}
            </Slider>
          </StyledPersonsContainer>
          <StyledText>
            {locale === 'en'
              ? 'The Economic Forum served as a remarkable platform for the Stay With Ukraine organization to interact with prominent individuals and expand their outreach efforts.'
              : 'Економічний форум став чудовою платформою для організації Stay With Ukraine для взаємодії з видатними особистостями та розширення зусиль щодо просування їхньої місії.'}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'Through this event, Stay With Ukraine was able to connect with influential leaders from various sectors and engage them in meaningful discussions about the importance of supporting Ukraines economic development.'
              : "Через цю подію Stay With Ukraine змогла зв'язатися з впливовими лідерами з різних секторів та залучити їх до міркувань про важливість підтримки економічного розвитку України."}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'Not only did the forum provide an opportunity for Stay With Ukraine to network with key figures, but it also enabled the organization to showcase their work and highlight the significance of their cause to a wider audience. The discussions and interactions at the forum allowed Stay With Ukraine to gain valuable insights, perspectives, and potential partnerships that could help further their mission.'
              : 'Форум не лише надав можливість Stay With Ukraine знайомитися з ключовими фігурами, але й дозволив організації показати свою роботу та підкреслити значущість їхньої справи перед широкою аудиторією. Обговорення та взаємодії на форумі дозволили Stay With Ukraine отримати цінні уявлення, перспективи та потенційні партнерства, які можуть допомогти далі просувати їхню місію.'}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'Overall, the Economic Forum proved to be an invaluable platform for Stay With Ukraine to advance their goals and connect with individuals who can make a significant impact in promoting Ukraines economic growth and stability.'
              : "В цілому, Економічний форум виявився надзвичайно цінною платформою для організації Stay With Ukraine для досягнення її цілей та зв'язку з особами, які можуть суттєво вплинути на просування економічного зростання та стабільності України."}
          </StyledText>
          <StyledShareBlock>
            <StyledShareText preset={TEXT_PRESETS.REG_16}>
              {locale === 'en' ? 'Share' : 'Поділитись'}
            </StyledShareText>
            <FacebookShareButton
              url={'https://stay-with-ua.admiral-studios.com/uk/news/1'}
              title={
                locale === 'en'
                  ? '31st Economic Forum in Karpacz'
                  : '31-й економічний форум у Карпачі'
              }
            >
              <StyledShareIcon alt='social network' src={ICONS.FACEBOOK} />
            </FacebookShareButton>
            <TwitterShareButton
              url={'https://stay-with-ua.admiral-studios.com/uk/news/1'}
              title={
                locale === 'en'
                  ? '31st Economic Forum in Karpacz'
                  : '31-й економічний форум у Карпачі'
              }
            >
              <StyledShareIcon alt='social network' src={ICONS.TWITTER} />
            </TwitterShareButton>
            <LinkedinShareButton
              url={'https://stay-with-ua.admiral-studios.com/uk/news/1'}
              title={
                locale === 'en'
                  ? '31st Economic Forum in Karpacz'
                  : '31-й економічний форум у Карпачі'
              }
            >
              <StyledShareIcon alt='social network' src={ICONS.LINKEDIN} />
            </LinkedinShareButton>
          </StyledShareBlock>
        </StyledContentContainer>
        <StyledAlsoContainer>
          <StyledReadAlsoTitlesContainer>
            <StyledReadAlsoText preset={TEXT_PRESETS.REG_22}>
              {locale === 'en' ? 'Read also' : 'Читайте також'}
            </StyledReadAlsoText>
            {windowsWidthCheck && (
              <StyledNewsLink href={'/news'}>
                <StyledBackContainer>
                  <StyledBackText preset={TEXT_PRESETS.SEMIBOLD_15}>
                    {locale === 'en' ? 'See all news' : 'Дивитись всі новини'}
                  </StyledBackText>
                  <StyledIcon src={ICONS.ARROW_RIGHT_DARK} alt='arrow' />
                </StyledBackContainer>
              </StyledNewsLink>
            )}
          </StyledReadAlsoTitlesContainer>
          <StyledNewsContainer>{renderSecondaryNews}</StyledNewsContainer>
          {!windowsWidthCheck && (
            <StyledSeeAllNewsContainer>
              <StyledNewsLink href={'/news'}>
                <StyledBackContainer style={{ marginTop: '20px' }}>
                  <StyledBackText preset={TEXT_PRESETS.SEMIBOLD_15}>
                    {locale === 'en' ? 'See all news' : 'Дивитись всі новини'}
                  </StyledBackText>
                  <StyledIcon src={ICONS.ARROW_RIGHT_DARK} alt='arrow' />
                </StyledBackContainer>
              </StyledNewsLink>
            </StyledSeeAllNewsContainer>
          )}
        </StyledAlsoContainer>
      </StyledMainContainer>
    </MetaLayer>
  );
};

export default NewsItemPage1;
