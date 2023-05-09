import { useEffect, useState } from 'react';
import { map } from 'lodash';
import Link from 'next/link';

import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';

import { IMAGES } from '../../../public';
import { Burger } from '../Burger';
import { DropdownButton } from '../DropdownButton';
import { ExtendedButton } from '../ExtendedButton';
import { ExtendedText } from '../ExtendedText';
import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';

import { flags } from './Header.data';
import {
  StyledGradient,
  StyledHeaderContainer,
  StyledHeaderLink,
  StyledHelpContainer,
  StyledLinksContainer,
  StyledLogo,
  StyledRoutesContainer,
} from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header: React.FC<HeaderProps> = ({ currentPage, headerStyle }) => {
  const [mounted, setMounted] = useState(false);
  const locale = getLocale();
  const { header } = strings[locale];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderLinks = () => {
    if (width && width > 1000) {
      return map(header.links, (link) => {
        const isCurrentPage = link.id === currentPage;
        return (
          <StyledHeaderLink
            isselected={isCurrentPage ? 'true' : 'false'}
            href={link.path}
            key={`header-link-${link.name}`}
          >
            <ExtendedText preset={TEXT_PRESETS.SEMIBOLD_15}>
              {link.name}
            </ExtendedText>
          </StyledHeaderLink>
        );
      });
    }
  };

  return (
    <StyledHeaderContainer headerStyle={headerStyle} isOpen={isOpen}>
      {headerStyle === 'transparent' && <StyledGradient isOpen={isOpen} />}
      <StyledLinksContainer>
        <Link href={'/'}>
          <StyledLogo src={IMAGES.LOGO} alt='logo' width={114} height={41} />
        </Link>
        <StyledRoutesContainer>{renderLinks()}</StyledRoutesContainer>
      </StyledLinksContainer>
      {width && width > 1000 ? (
        <StyledHelpContainer>
          <ExtendedButton
            link={header.button.path}
            preset='yellowSmall'
            title={header.button.name}
          />
          <DropdownButton
            items={flags}
            isOpen={isOpenDropdown}
            setIsOpen={setIsOpenDropdown}
          />
        </StyledHelpContainer>
      ) : (
        <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </StyledHeaderContainer>
  );
};
