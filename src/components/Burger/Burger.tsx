import { FC, useCallback, useState } from 'react';
import map from 'lodash/map';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import strings, { getLocale } from '@/locales';

import { ICONS } from '../../../public';
import { DropdownButton } from '../DropdownButton';
import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';
import { flags } from '../Header/Header.data';

import {
  BurgerContainer,
  StyledBurgerLink,
  StyledBurgerMenu,
  StyledHelpContainer,
  StyledHelpText,
  StyledLangContainer,
  StyledLangText,
  StyledLinksContainer,
} from './Burger.styles';
import { BurgerProps } from './Burger.types';

export const Burger: FC<BurgerProps> = ({ isOpen, setIsOpen }) => {
  const locale = getLocale();
  const router = useRouter();
  const { header } = strings[locale];
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const renderMenuLinks = useCallback(() => {
    return map(header.links, (link) => (
      <StyledBurgerLink
        isSelected={link.path === router.asPath}
        href={link.path}
        prefetch={false}
        key={`header-link-${link.name}`}
      >
        {link.name}
      </StyledBurgerLink>
    ));
  }, [header.links, router.asPath]);

  return (
    <>
      <BurgerContainer onClick={() => setIsOpen(!isOpen)}>
        <Image
          src={isOpen ? ICONS.BURGER_CROSS : ICONS.BURGER}
          alt='Burger menu'
          width={24}
          height={24}
        />
      </BurgerContainer>
      <StyledBurgerMenu isOpen={isOpen}>
        <StyledLinksContainer>
          <Link href='/help-Ukraine' key={`header-link-help-Ukraine`} prefetch={false}>
            <StyledHelpContainer isSelected={`/help-Ukraine` === router.asPath}>
              <StyledHelpText>
                {locale === 'en' ? 'Help Ukraine' : 'Допомогти'}
              </StyledHelpText>
            </StyledHelpContainer>
          </Link>
          {renderMenuLinks()}
        </StyledLinksContainer>
        <StyledLangContainer>
          <StyledLangText preset={TEXT_PRESETS.REG_16}>
            {locale === 'en' ? 'Language:' : 'Мова:'}
          </StyledLangText>
          <DropdownButton
            items={flags}
            isOpen={isOpenDropdown}
            setIsOpen={setIsOpenDropdown}
          />
        </StyledLangContainer>
      </StyledBurgerMenu>
    </>
  );
};
