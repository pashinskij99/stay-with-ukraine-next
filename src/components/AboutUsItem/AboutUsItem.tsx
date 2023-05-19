import { FC } from 'react';

import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';

import {
  StyledAuthorContainer,
  StyledAuthorName,
  StyledAuthorSubName,
  StyledAuthorTextContainer,
  StyledExtendedText,
  StyledImage,
  StyledItemContainer,
} from './AboutUsItem.styles';
import { AboutUsItemProps } from './AboutUsItem.types';

export const AboutUsItem: FC<AboutUsItemProps> = ({ item }) => {
  return (
    <StyledItemContainer>
      <StyledExtendedText preset={TEXT_PRESETS.REG_22}>
        {item.text}
      </StyledExtendedText>
      <StyledAuthorContainer>
        <StyledImage
          src={item.author.image}
          alt='author logo'
          width={56}
          height={56}
        />
        <StyledAuthorTextContainer>
          <StyledAuthorName>{item.author.name}</StyledAuthorName>
          <StyledAuthorSubName>{item.author.subName}</StyledAuthorSubName>
        </StyledAuthorTextContainer>
      </StyledAuthorContainer>
    </StyledItemContainer>
  );
};
