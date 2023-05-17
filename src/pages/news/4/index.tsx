import { useMemo } from 'react';
import { map } from 'lodash';
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

const NewsItemPage2: React.FC = () => {
  const locale = getLocale();
  const { latestNews } = strings[locale];
  const { width } = useWindowDimensions();
  const windowsWidthCheck = width && width > 800;

  const renderSecondaryNews = useMemo((): JSX.Element[] => {
    const mainNewsTitle =
      locale === 'en'
        ? 'The meeting in Senate of France'
        : 'Засідання у Сенаті Франції';
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

  return (
    <MetaLayer
      title={locale === 'en' ? 'The meeting in Senate of France | Stay UA' : 'Засідання у Сенаті Франції | Stay UA'}
      description={locale === 'en' ? 'The meeting with Senator Leconte offered an exceptional platform for Stay With Ukraine to exchange ideas and explore future collaborations.' : 'Зустріч з сенатором Леконт дала виняткову платформу для Stay With Ukraine обмінюватися ідеями та досліджувати майбутні співпраці.'}
      backgroundColor={COLORS.WHITE}
      currentPage='4'
      headerStyle='black'
      headChildren={
        <>
          <link rel="alternate" hrefLang="en" href="https://www.stayua.com/news/4" />
          <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/news/4" />
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
          <StyledImage alt='president' src={NEWS_IMAGES.SENATE} />
          <StyledDataText preset={TEXT_PRESETS.REG_16}>
            {locale === 'en' ? `19 October 2022` : `19 Жовтня 2022`}
          </StyledDataText>
          <StyledTitle>
            {locale === 'en'
              ? 'The meeting in Senate of France'
              : 'Засідання у Сенаті Франції'}
          </StyledTitle>
          <StyledText>
            {locale === 'en'
              ? `Stay With Ukraine's recent visit to Paris was a crucial milestone in strengthening its international partnerships. The meeting with French Senator Jean-Yves Leconte at the Senate of France was undoubtedly one of the highlights of the trip, where they delved into the pressing issues of our times.`
              : `Нещодавній візит Stay With Ukraine до Парижа був важливим кроком на шляху до зміцнення її міжнародних партнерств. Зустріч з французьким сенатором Жан-Івом Леконте в Сенаті Франції незаперечно стала однією з найбільш яскравих подій поїздки, під час якої було порушено актуальні проблеми наших днів.`}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? `The conversation encompassed a wide range of topics, including the current state of affairs in Ukraine and exploring potential avenues for enhancing cooperation between Ukraine and France. The discussions also touched on the critical aspects of rebuilding Ukraine and strengthening international affairs to promote stability and security.`
              : `Розмова охопила широкий спектр тем, включаючи поточний стан справ в Україні та розгляд можливих шляхів зміцнення співпраці між Україною та Францією. Обговорення також стосувалися важливих аспектів відновлення України та зміцнення міжнародних відносин для підтримки стабільності та безпеки.`}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? `The influence of Russia and its full-scale invasion of Ukraine was a topic of significant interest. The discourse focused on how Russian actions could impact the political and economic landscape of Africa, including food security on the continent.`
              : `Вплив Росії та її повномасштабна інвазія України була темою значного інтересу. Дискусія сфокусована на тому, як дії Росії можуть позначитися на політичному та економічному ландшафті Африки, включаючи продовольчу безпеку на континенті.`}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? `The meeting with Senator Leconte offered an exceptional platform for Stay With Ukraine to exchange ideas and explore future collaborations. It underlined the organization's unwavering dedication to building robust partnerships with other nations, all working towards a more peaceful and prosperous future for Ukraine and the world.`
              : `Зустріч з сенатором Леконт дала виняткову платформу для Stay With Ukraine обмінюватися ідеями та досліджувати майбутні співпраці. Вона підкреслила невідступну присвяченість організації налагодженню міцних партнерств з іншими країнами, які всі працюють на користь більш мирної та процвітаючої майбутньої України та світу.`}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? `As Stay With Ukraine continues to forge connections with global partners, it remains committed to its mission of fostering resilience, compassion, and hope amidst conflicts and adversities. The organization continues to be a beacon of hope, promoting international cooperation towards a more peaceful and prosperous world.`
              : `Доки Stay With Ukraine продовжує лантувати зв'язки з глобальними партнерами, воно залишається присвяченим своїй місії сприяти стійкості, співчуттю та надії на тлі конфліктів і нещастя. Організація продовжує бути прикладом надії, сприяючи міжнародній співпраці для досягнення більш мирного та процвітаючого світу.`}
          </StyledText>
          <StyledShareBlock>
            <StyledShareText preset={TEXT_PRESETS.REG_16}>
              {locale === 'en' ? 'Share' : 'Поділитись'}
            </StyledShareText>
            <FacebookShareButton
              url={'https://stay-with-ua.admiral-studios.com/uk/news/4'}
              title={
                locale === 'en'
                  ? 'The meeting in Senate of France'
                  : 'Засідання у Сенаті Франції'
              }
            >
              <StyledShareIcon alt='social network' src={ICONS.FACEBOOK} />
            </FacebookShareButton>
            <TwitterShareButton
              url={'https://stay-with-ua.admiral-studios.com/uk/news/4'}
              title={
                locale === 'en'
                  ? 'The meeting in Senate of France'
                  : 'Засідання у Сенаті Франції'
              }
            >
              <StyledShareIcon alt='social network' src={ICONS.TWITTER} />
            </TwitterShareButton>
            <LinkedinShareButton
              url={'https://stay-with-ua.admiral-studios.com/uk/news/4'}
              title={
                locale === 'en'
                  ? 'The meeting in Senate of France'
                  : 'Засідання у Сенаті Франції'
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

export default NewsItemPage2;
