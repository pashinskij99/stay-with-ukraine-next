import { FC } from 'react';

import strings, { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

import { ExtendedButton } from '../ExtendedButton';
import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';

import {
  StyledMainContainer,
  StyledSubtitle,
  StyledTitle,
} from './TalkAboutFuture.styles';

export const TalkAboutFuture: FC = () => {
  const locale = getLocale();
  const { talkAboutFuture } = strings[locale];

  return (
    <StyledMainContainer>
      <StyledTitle color={COLORS.BLACK} lang={locale}>
        {talkAboutFuture.title}
      </StyledTitle>
      <StyledSubtitle preset={TEXT_PRESETS.LIGHT_20}>
        {talkAboutFuture.subtitle}
      </StyledSubtitle>
      <ExtendedButton
        link='/contact'
        preset='primary'
        title={talkAboutFuture.buttonText}
        titleStyle={{ color: 'black' }}
      />
    </StyledMainContainer>
  );
};
