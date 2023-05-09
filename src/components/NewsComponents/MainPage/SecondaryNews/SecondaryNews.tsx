import { useEffect, useState } from 'react';

import { TEXT_PRESETS } from '@/components/ExtendedText/ExtendedText.types';
import { getLocale } from '@/locales';

import {
  StyledData,
  StyledImage,
  StyledImageContainer,
  StyledSecondaryInfoContainer,
  StyledSecondaryNewsContainer,
  StyledTagContainer,
  StyledTagText,
  StyledTitle,
} from './SecondaryNews.styles';
import { SecondaryNewsProps } from './SecondaryNews.types';

export const SecondaryNews: React.FC<SecondaryNewsProps> = ({
  data,
  index,
}) => {
  const locale = getLocale();
  const [mounted, setMounted] = useState(false);
  const isSecondItem = index === 1;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <StyledSecondaryNewsContainer number={index} isSecond={isSecondItem}>
      <StyledImageContainer>
        <StyledImage src={data.image} alt='secondary news' />
      </StyledImageContainer>
      <StyledSecondaryInfoContainer>
        <div className='aiCenter'>
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
        </div>
        <StyledTitle>{data.title}</StyledTitle>
      </StyledSecondaryInfoContainer>
    </StyledSecondaryNewsContainer>
  );
};
