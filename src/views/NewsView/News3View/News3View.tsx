import { FC, useMemo } from 'react';
import map from 'lodash/map';
import Link from 'next/link';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share';

import { MetaLayer } from '@/components';
import { TEXT_PRESETS } from '@/components/ExtendedText/ExtendedText.types';
import { NewsItem, SmallNewsItem } from '@/components/NewsComponents';
import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
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
  StyledNewsContainer,
  StyledNewsLink,
  StyledReadAlsoText,
  StyledReadAlsoTitlesContainer,
  StyledSeeAllNewsContainer,
  StyledShareBlock,
  StyledShareIcon,
  StyledShareText,
  StyledText,
  StyledTitle,
} from '../../../pagesStyles/NewsItemPage.styles';

const NewsViewPage3: FC = () => {
  const locale = getLocale();
  const { latestNews } = strings[locale];
  const { width } = useWindowDimensions();
  const windowsWidthCheck = width && width > 800;

  const renderSecondaryNews = useMemo((): JSX.Element[] => {
    const mainNewsTitle =
      locale === 'en'
        ? 'The Discussion About Preservation of Cultural Heritage and Economic Cooperation of Poland and Ukraine in the Volyn Region'
        : 'Обговорення збереження культурної спадщини та економічної співпраці Польщі та України в Волинському регіоні.';
    let filteredNews = latestNews.data.filter(
      (item) => item.title !== mainNewsTitle,
    );
    const randomNews = filteredNews.slice(0, 3);
    return map(randomNews, (item, index) => (
      <Link
        href={item.path}
        prefetch={false}
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

  return (
    <MetaLayer
      backgroundColor={COLORS.WHITE}
      currentPage='3'
      headerStyle='black'
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
          <StyledImage alt='president' src={NEWS_IMAGES.THIRD_NEWS_IMG} />
          <StyledDataText preset={TEXT_PRESETS.REG_16}>
            {locale === 'en' ? `1 February 2023` : `1 Лютого 2023р`}
          </StyledDataText>
          <StyledTitle>
            {locale === 'en'
              ? 'The Discussion About Preservation of Cultural Heritage and Economic Cooperation of Poland and Ukraine in the Volyn Region'
              : 'Обговорення збереження культурної спадщини та економічної співпраці Польщі та України в Волинському регіоні.'}
          </StyledTitle>
          <StyledText>
            {locale === 'en'
              ? `"Stay With Ukraine", a non-profit organization committed to supporting Ukraine in times of crisis, recently participated with Daniel Dragan, a member of the Polish Sejm, in critical discussions with the governor of the Volyn region, Yuriy Pohulayko. The main agenda of the meeting was to deliberate on the preservation of shared cultural heritage between Poland and Ukraine in the Volyn region, as well as to address issues related to environmental protection and investment for a fruitful future cooperation between the two countries.`
              : `"Залишайся з Україною", неприбуткова організація, яка зобов'язується підтримувати Україну в часи кризи, нещодавно брала участь разом із Даніелем Драганом, членом польського Сейму, у важливих дискусіях з головою Волинської області, Юрієм Погуляйком. Основне завдання зустрічі полягало в розгляді питань збереження спільної культурної спадщини між Польщею та Україною в регіоні Волині, а також у вирішенні питань, пов'язаних з охороною навколишнього середовища та інвестиціями для плідної майбутньої співпраці між двома країнами.`}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'The Volyn region, located in the western part of Ukraine, has a rich and diverse cultural heritage. Its history is closely intertwined with that of Poland, and it has several significant historical landmarks that are of immense cultural value to both Poland and Ukraine. The preservation of this cultural heritage has been a top priority for both countries, and Stay With Ukraine and Daniel Dragan have been actively involved in promoting and supporting this cause.'
              : `Волинська область, розташована на заході України, має багату та різноманітну культурну спадщину. Її історія тісно пов'язана з історією Польщі, а також має кілька значущих історичних пам'яток, які є важливими культурними цінностями для обох країн: Польщі та України. Збереження цієї культурної спадщини є одним з основних пріоритетів обох країн, тому "Залишайся з Україною" та Даніел Драган активно долучаються до сприяння та підтримки цієї справи.`}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? `During the meeting with Governor Pohulayko, the participants discussed various strategies to safeguard the cultural landmarks of the Volyn region, including the establishment of joint initiatives and projects that would enable better conservation of the heritage sites. Additionally, they discussed the need for effective environmental protection measures to ensure the long-term sustainability of the region's natural resources.`
              : `Під час зустрічі з губернатором Погуляйко, учасники обговорили різні стратегії збереження культурних пам'яток Волинської області, включно зі створенням спільних ініціатив та проєктів, що дозволять краще зберігати пам'ятки спадщини. Крім того, вони обговорювали необхідність ефективних заходів щодо охорони навколишнього середовища для забезпечення довгострокової сталості природних ресурсів регіону.`}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? `Investment in the future cooperation between Poland and Ukraine was also a crucial point of discussion. The participants explored ways to promote economic growth and development in the Volyn region through joint investments, with a focus on industries such as tourism and agriculture. They also discussed the possibilities of establishing closer ties between educational and research institutions in Poland and Ukraine.`
              : `Інвестиції у майбутню співпрацю між Польщею та Україною були також ключовою темою обговорення. Учасники розглядали шляхи сприяння економічному зростанню та розвитку Волинської області через спільні інвестиції з фокусом на галузях, таких як туризм та сільське господарство. Вони також обговорювали можливості встановлення тісніших зв'язків між освітніми та науковими інститутами в Польщі та Україні.`}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? `Overall, the meeting was a significant step towards strengthening the cultural, environmental, and economic ties between Poland and Ukraine. Stay With Ukraine and Daniel Dragan reaffirmed their commitment to the cause and pledged to continue supporting initiatives that promote collaboration and cooperation between the two countries.`
              : `Загалом, зустріч була значним кроком на шляху до зміцнення культурних, екологічних та економічних зв'язків між Польщею та Україною. Stay With Ukraine та Даніель Драган підтвердили своє зобов'язання перед цією справою та обіцяли продовжувати підтримувати ініціативи, які сприяють співпраці та співробітництву між двома країнами.`}
          </StyledText>
          <StyledShareBlock>
            <StyledShareText preset={TEXT_PRESETS.REG_16}>
              {locale === 'en' ? 'Share' : 'Поділитись'}
            </StyledShareText>
            <FacebookShareButton
              url={'https://stay-with-ua.admiral-studios.com/uk/news/3'}
              title={
                locale === 'en'
                  ? 'The Discussion About Preservation of Cultural Heritage and Economic Cooperation of Poland and Ukraine in the Volyn Region'
                  : 'Обговорення збереження культурної спадщини та економічної співпраці Польщі та України в Волинському регіоні.'
              }
            >
              <StyledShareIcon alt='social network' src={ICONS.FACEBOOK} />
            </FacebookShareButton>
            <TwitterShareButton
              url={'https://stay-with-ua.admiral-studios.com/uk/news/3'}
              title={
                locale === 'en'
                  ? 'The Discussion About Preservation of Cultural Heritage and Economic Cooperation of Poland and Ukraine in the Volyn Region'
                  : 'Обговорення збереження культурної спадщини та економічної співпраці Польщі та України в Волинському регіоні.'
              }
            >
              <StyledShareIcon alt='social network' src={ICONS.TWITTER} />
            </TwitterShareButton>
            <LinkedinShareButton
              url={'https://stay-with-ua.admiral-studios.com/uk/news/3'}
              title={
                locale === 'en'
                  ? 'The Discussion About Preservation of Cultural Heritage and Economic Cooperation of Poland and Ukraine in the Volyn Region'
                  : 'Обговорення збереження культурної спадщини та економічної співпраці Польщі та України в Волинському регіоні.'
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
              <StyledNewsLink href={'/news'} prefetch={false}>
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
              <StyledNewsLink href={'/news'} prefetch={false}>
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

export default NewsViewPage3;
