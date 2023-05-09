import Link from 'next/link';

import { TEXT_PRESETS } from '@/components/ExtendedText/ExtendedText.types';
import { getLocale } from '@/locales';

import { ICONS } from '../../../../../public/icons';

import {
  StyledDateText,
  StyledImage,
  StyledImageContainer,
  StyledItemContainer,
  StyledNewsMetaContainer,
  StyledReadmoreContainer,
  StyledReadmoreIcon,
  StyledReadmoreText,
  StyledTagContainer,
  StyledTagText,
  StyledTextContainer,
  StyledTitle,
} from './NewsItem.styles';
import { NewsItemProps } from './NewsItem.types';

export const NewsItem: React.FC<NewsItemProps> = ({ data, isInNewsItem }) => {
  const locale = getLocale();

  return (
    <StyledItemContainer isInNewsItem={isInNewsItem}>
      <Link href={data.path}>
        <StyledImageContainer isInNewsItem={isInNewsItem}>
          <StyledImage alt='news item' src={data.image} isInNewsItem={isInNewsItem} />
        </StyledImageContainer>
      </Link>
      <StyledNewsMetaContainer>
        <StyledTagContainer>
          <StyledTagText preset={TEXT_PRESETS.REG_16}>
            {locale === 'en'
              ? //@ts-ignore
                data.tag.valueEn
              : //@ts-ignore
                data.tag.valueUk}
          </StyledTagText>
        </StyledTagContainer>
        <StyledDateText preset={TEXT_PRESETS.REG_16}>
          {data.data}
        </StyledDateText>
      </StyledNewsMetaContainer>
      <StyledTextContainer>
        <Link href={data.path}>
          <StyledTitle isInNewsItem={isInNewsItem} preset={TEXT_PRESETS.REG_22}>
            {data.title}
          </StyledTitle>
        </Link>
        <Link href={data.path}>
          <StyledReadmoreContainer>
            <StyledReadmoreText preset={TEXT_PRESETS.SEMIBOLD_15}>
              {locale === 'en' ? 'Read more' : 'Читати далі'}
            </StyledReadmoreText>
            <StyledReadmoreIcon src={ICONS.ARROW_RIGHT_DARK} alt='arrow' />
          </StyledReadmoreContainer>
        </Link>
      </StyledTextContainer>
    </StyledItemContainer>
  );
};
