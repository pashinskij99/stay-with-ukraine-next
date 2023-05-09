import { useRouter } from 'next/router';

import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

import { ICONS } from '../../../public/icons';
import { Breadcrumbs } from '../Breadcrumbs';
import { ExtendedTextField } from '../ExtendedTextField';

import {
  StyledMainContainer,
  StyledTextFieldContainer,
  StyledTitle,
} from './FlagBlock.styles';
import { FlagBlockProps } from './FlagBlock.types';

export const FlagBlock: React.FC<FlagBlockProps> = ({ title }) => {
  const locale = getLocale();
  const router = useRouter();
  const { flagBlock } = strings[locale];
  const { width } = useWindowDimensions();
  const windowWidthCheck = width && width < 500;

  return (
    <StyledMainContainer>
      {!windowWidthCheck && <Breadcrumbs />}
      <StyledTitle color={COLORS.WHITE} lang={locale}>
        {title ? title : flagBlock.title}
      </StyledTitle>
      {router.asPath === '/news' && (
        <StyledTextFieldContainer>
          <ExtendedTextField
            height={windowWidthCheck ? '60px' : '66px'}
            placeholder={flagBlock.placeholder}
            buttonIcon={ICONS.SEARCH}
          />
        </StyledTextFieldContainer>
      )}
    </StyledMainContainer>
  );
};
