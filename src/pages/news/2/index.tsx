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
      locale === 'en' ? `The Story about Chernihiv` : `Історія про Чернігів`;
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
      title={locale === 'en' ? 'The Story about Chernihiv | Stay UA': 'Історія про Чернігів | Stay UA'}
      description={locale === 'en' ? 'Today, we would like to share a story of resilience and compassion - a story about delivering aid to the heroic city of Chernihiv at the beginning of the war.' : 'Сьогодні ми хочемо поділитися історією стійкості та співчуття – історією про доставку допомоги місту-герою Чернігову на початку війни.'}
      backgroundColor={COLORS.WHITE}
      currentPage='2'
      headerStyle='black'
      headChildren={
        <>
          <link rel="alternate" hrefLang="en" href="https://www.stayua.com/news/2" />
          <link rel="alternate" hrefLang="uk" href="https://www.stayua.com/uk/news/2" />
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
          <StyledImage alt='president' src={NEWS_IMAGES.CHERNIHIV} />
          <StyledDataText preset={TEXT_PRESETS.REG_16}>
            {locale === 'en' ? `April 3, 2022` : `3 квітня 2022р`}
          </StyledDataText>
          <StyledTitle>
            {locale === 'en'
              ? `The Story about Chernihiv`
              : `Історія про Чернігів`}
          </StyledTitle>
          <StyledText>
            {locale === 'en'
              ? 'Today, we would like to share a story of resilience and compassion - a story about delivering aid to the heroic city of Chernihiv at the beginning of the war.'
              : 'Сьогодні ми хотіли б розповісти історію стійкості та співчуття - історію про доставку допомоги героїчному місту Чернігів на початку війни.'}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? "The Russian military full scale invasion into Ukrainian territory came as a massive tragedy to us all. We knew we could not sit idly or run away. That's why, on the third day of the war, we founded the Stay With Ukraine organization - a symbol of our unwavering determination to defend our homeland and save as many lives as possible."
              : 'Повномасштабна військова інвація Росії на територію України стала великою трагедією для всіх нас. Ми знали, що не можемо просто сидіти склавши руки або втікати. Тому, на третій день війни ми заснували організацію "Залишаймося з Україною" - символ нашої невмирущої визначеності захистити нашу батьківщину та врятувати якомога більше життів.'}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'Leveraging our connections in Europe, we acquired a significant amount of humanitarian aid to support those impacted by the conflict. The aid was shipped to Ukraine and delivered to the central train station in Kyiv. Each time a train arrived, we rushed to the station with a sense of urgency, knowing that every moment was vital.'
              : "Використовуючи наші зв'язки в Європі, ми отримали значну кількість гуманітарної допомоги для підтримки тих, хто постраждав від конфлікту. Допомога була доставлена до України і доставлена ​​на центральний вокзал у Києві. Кожного разу, коли прибував потяг, ми поспішали на станцію з почуттям невідкладності, усвідомлюючи, що кожна мить має велике значення."}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'However, our mission was not without obstacles. All the bridges leading to Chernihiv had been destroyed, rendering conventional means of transportation impossible.'
              : 'Однак наша місія не була без перешкод. Усі мости, що ведуть до Чернігова, були знищені, що унеможливило використання звичайних засобів транспортування.'}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'Despite the challenges, we loaded the aid onto small buses and entrusted them to the drivers of our partner organizations. These brave individuals drove across fields to deliver aid to the people of Chernihiv every single time.'
              : 'Незважаючи на труднощі, ми завантажували допомогу у маленькі автобуси і довірили їх водіям наших партнерських організацій. Ці хоробрі люди проїжджали поля, щоб доставляти допомогу жителям Чернігівщини кожен раз.'}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'Thanks to the tireless efforts and unwavering dedication of everyone involved, the operation was a success. The much-needed aid reached those who needed it the most, and our partners returned with those who required assistance.'
              : 'Благодаря невтомним зусиллям і незламній присвяці всіх, хто брав участь у цій операції, все успішно вдалося. Довгоочікувана допомога досягла тих, хто її найбільше потребував, і наші партнери повернулися з тими, хто потребував допомоги.'}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'We kept repeating this cycle, driven by our commitment to help those in need. And we recognized that none of this would have been possible without the courageous individuals who refused to flee in the face of danger and chose to defend their Motherland.'
              : "Ми продовжували повторювати цей цикл, керуючись нашим зобов'язанням допомагати тим, хто потребує допомоги. І ми визнали, що жодного з цього не було б можливо без хоробрих людей, які відмовилися втекти від небезпеки і вибрали захищати свою Батьківщину."}
          </StyledText>
          <StyledText>
            {locale === 'en'
              ? 'This story is a testament to the power of human kindness, compassion, and resilience. Even in the bleakest of times, there is always hope. This is not only a story about our organization but about the strength and tenacity of the human spirit.'
              : 'Ця історія свідчить про силу людської доброти, співчуття та стійкості. Навіть в найбільш мрачні часи завжди є надія. Це не лише історія про нашу організацію, а про силу та наполегливість людського духу.'}
          </StyledText>
          <StyledShareBlock>
            <StyledShareText preset={TEXT_PRESETS.REG_16}>
              {locale === 'en' ? 'Share' : 'Поділитись'}
            </StyledShareText>
            <FacebookShareButton url={'https://stay-with-ua.admiral-studios.com/uk/news/2'} title={locale === 'en'
              ? `The Story about Chernihiv`
              : `Історія про Чернігів`}>
              <StyledShareIcon alt='social network' src={ICONS.FACEBOOK} />
            </FacebookShareButton>
            <TwitterShareButton url={'https://stay-with-ua.admiral-studios.com/uk/news/2'} title={locale === 'en'
              ? `The Story about Chernihiv`
              : `Історія про Чернігів`}>
              <StyledShareIcon alt='social network' src={ICONS.TWITTER} />
            </TwitterShareButton>
            <LinkedinShareButton url={'https://stay-with-ua.admiral-studios.com/uk/news/2'} title={locale === 'en'
              ? `The Story about Chernihiv`
              : `Історія про Чернігів`}>
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
