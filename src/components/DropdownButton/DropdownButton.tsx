import { FC } from 'react';
import map from 'lodash/map';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getLocale } from '@/locales';

import { ICONS } from '../../../public/icons';
import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';

import {
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledDropdownMenu,
  StyledDropdownMenuItem,
  StyledIcon,
  StyledLangText,
} from './DropdownButton.styles';
import { DropdownButtonType } from './DropdownButton.types';

export const DropdownButton: FC<DropdownButtonType> = ({
  isOpen,
  setIsOpen,
  items,
}) => {
  const router = useRouter();
  const locale = getLocale();

  const getAnotherLocale = (item: 'EN' | 'UK') => {
    if (locale === item.toLowerCase()) return locale;
    if (locale === 'en') return 'uk';
    if (locale === 'uk') return 'en';
  };

  const renderItems = () =>
    map(items, (item) => (
      <Link
        key={`site-language-${item}`}
        href={router.asPath}
        prefetch={false}
        locale={getAnotherLocale(item as 'EN' | 'UK')}
      >
        <StyledDropdownMenuItem>
          <StyledLangText
            preset={TEXT_PRESETS.REG_16}
            isSelected={locale === item.toLowerCase()}
          >
            {item === 'EN' ? 'Eng' : 'Ukr'}
          </StyledLangText>
        </StyledDropdownMenuItem>
      </Link>
    ));

  return (
    <StyledDropdownContainer onClick={() => setIsOpen(!isOpen)}>
      <StyledDropdownButton>
        {locale === 'en' ? 'Eng' : 'Ukr'}
      </StyledDropdownButton>
      <StyledDropdownMenu isOpenDropdown={isOpen}>
        {renderItems()}
      </StyledDropdownMenu>
      <StyledIcon
        isOpenDropdown={isOpen}
        width={12}
        height={12}
        alt='arrow'
        src={ICONS.ARROW_DOWN}
      />
    </StyledDropdownContainer>
  );
};
