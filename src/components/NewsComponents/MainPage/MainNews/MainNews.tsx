import { FC, useEffect, useState } from 'react';

import { TEXT_PRESETS } from '@/components/ExtendedText/ExtendedText.types';
import { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

import {
  StyledData,
  StyledLink,
  StyledMainContainer,
  StyledSecondaryInfoContainer,
  StyledTagContainer,
  StyledTagText,
  StyledTitle,
} from './MainNews.styles';
import { MainNewsProps } from './MainNews.types';

export const MainNews: FC<MainNewsProps> = ({ data }) => {
  const locale = getLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <StyledLink href={data.path} prefetch={false}>
      <StyledMainContainer image={data.image}>
        <StyledSecondaryInfoContainer>
          <StyledTagContainer>
            <StyledTagText preset={TEXT_PRESETS.REG_16}>
              {locale === 'en'
                ? //@ts-ignore
                  data.tag.valueEn
                : //@ts-ignore
                  data.tag.valueUk}
            </StyledTagText>
          </StyledTagContainer>
          <StyledData preset={TEXT_PRESETS.REG_16}>{data.data}</StyledData>
        </StyledSecondaryInfoContainer>
        <StyledTitle color={COLORS.WHITE} lang={locale}>
          {data.title}
        </StyledTitle>
      </StyledMainContainer>
    </StyledLink>
  );
};
