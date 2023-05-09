import { useEffect, useState } from 'react';

import { TEXT_PRESETS } from '@/components/ExtendedText/ExtendedText.types';
import { getLocale } from '@/locales';

import {
  StyledData,
  StyledImage,
  StyledSecondaryInfoContainer,
  StyledSecondaryNewsContainer,
  StyledTagContainer,
  StyledTagText,
  StyledTitle,
} from './SmallNewsItem.styles';
import { SmallNewsItemProps } from './SmallNewsItem.types';

export const SmallNewsItem: React.FC<SmallNewsItemProps> = ({ data }) => {
  const [mounted, setMounted] = useState(false);
  const locale = getLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <StyledSecondaryNewsContainer>
      <StyledImage src={data.image} alt='secondary news' width={116} />
      <StyledSecondaryInfoContainer>
        <div className='aiCenter'>
          <StyledTagContainer>
            <StyledTagText preset={TEXT_PRESETS.REG_14}>
              {locale === 'en'
                ? //@ts-ignore
                  data.tag.valueEn
                : //@ts-ignore
                  data.tag.valueUk}
            </StyledTagText>
          </StyledTagContainer>
          <StyledData preset={TEXT_PRESETS.REG_14}>{data.data}</StyledData>
        </div>
        <StyledTitle>{data.title}</StyledTitle>
      </StyledSecondaryInfoContainer>
    </StyledSecondaryNewsContainer>
  );
};
