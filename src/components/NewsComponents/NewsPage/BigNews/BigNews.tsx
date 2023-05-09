import Link from 'next/link';

import { TEXT_PRESETS } from '@/components/ExtendedText/ExtendedText.types';
import { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

import { ICONS } from '../../../../../public/icons';

import {
  StyledArrowIcon,
  StyledDateText,
  StyledImage,
  StyledImageContainer,
  StyledMainNewsContainer,
  StyledNewsInfoContainer,
  StyledNewsMetaContainer,
  StyledNewsSubtitle,
  StyledNewsTitle,
  StyledReadMoreContainer,
  StyledReadMoreText,
  StyledTagContainer,
  StyledTagText,
} from './BigNews.styles';
import { BigNewsProps } from './BigNews.types';

export const BigNews: React.FC<BigNewsProps> = ({ data }) => {
  const locale = getLocale();

  return (
    <StyledMainNewsContainer>
      <StyledImageContainer>
        <Link href={data.path}>
          <StyledImage alt='main news' src={data.image} />
        </Link>
      </StyledImageContainer>
      <StyledNewsInfoContainer>
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
        <Link href={data.path}>
          <StyledNewsTitle color={COLORS.WHITE} lang={locale}>
            {data.title}
          </StyledNewsTitle>
        </Link>
        <StyledNewsSubtitle preset={TEXT_PRESETS.REG_16}>
          {data.subtitle}
        </StyledNewsSubtitle>
        <Link href={data.path}>
          <StyledReadMoreContainer>
            <StyledReadMoreText preset={TEXT_PRESETS.SEMIBOLD_15}>
              {locale === 'en' ? 'Read more' : 'Читати далі'}
            </StyledReadMoreText>
            <StyledArrowIcon
              alt='arrow'
              src={ICONS.ARROW_RIGHT}
              width={18}
              height={18}
            />
          </StyledReadMoreContainer>
        </Link>
      </StyledNewsInfoContainer>
    </StyledMainNewsContainer>
  );
};
