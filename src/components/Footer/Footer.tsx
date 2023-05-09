import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { map } from 'lodash';
import Link from 'next/link';

import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';

import { ICONS, IMAGES } from '../../../public';
import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';
import { ExtendedTextField } from '../ExtendedTextField';

import { externalLinks } from './Footer.data';
import {
  StyledAirplaneImage,
  StyledCopyrightText,
  StyledCredentialContainer,
  StyledCredentialsField,
  StyledCredentialsText,
  StyledExternalLink,
  StyledFieldContainer,
  StyledFooterCredsContainer,
  StyledFooterLink,
  StyledFooterLogo,
  StyledLinksContainer,
  StyledMainFooterContainer,
  StyledSeparator,
  StyledSiteInfoContainer,
  StyledSubscribeContainer,
  SubscribeText,
} from './Footer.styles';

export const Footer: React.FC = () => {
  const locale = getLocale();
  const { footer } = strings[locale];
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState('');

  const styles = width && width < 960 ? { display: 'none' } : {};

  const renderSiteLinks = () => {
    return map(footer.links, (link) => (
      <Link key={`site-link-${link.name}`} href={link.path}>
        <StyledFooterLink preset={TEXT_PRESETS.SEMIBOLD_15}>
          {link.name}
        </StyledFooterLink>
      </Link>
    ));
  };

  const renderExternalLinks = () => {
    return map(externalLinks, (link) => (
      <Link key={`external-link-${link.name}`} href={link.link} target='blank'>
        <StyledExternalLink
          src={link.image}
          alt={link.name}
          width={22}
          height={22}
        />
      </Link>
    ));
  };

  const onSubscribeClick = () => {
    axios
      .post(
        'https://admin.stay-with-ua.admiral-studios.com/api/subscriptions',
        {
          email: email,
        },
      )
      .then((response) => {
        toast.success(
          locale === 'en' ? 'We will contact you soon' : 'Ми з вами звʼяжемось',
          {
            autoClose: 3000,
            position: 'top-right',
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          },
        );
      })
      .catch((error) => {
        console.error(error);
        toast.error(locale === 'en' ? 'Something was wrong' : 'Щось не так', {
          autoClose: 3000,
          position: 'top-right',
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      });
  };

  return (
    <StyledMainFooterContainer>
      <StyledFooterCredsContainer>
        <StyledCredentialContainer>
          <StyledCredentialsField preset={TEXT_PRESETS.REG_16}>
            {footer.email}
          </StyledCredentialsField>
          <StyledCredentialsText
            lang={locale}
            href='mailto:general@stayua.com'
          >
            general@stayua.com
          </StyledCredentialsText>
        </StyledCredentialContainer>
        <StyledSeparator />
        <StyledCredentialContainer>
          <StyledCredentialsField preset={TEXT_PRESETS.REG_16}>
            {footer.phone}
          </StyledCredentialsField>
          <div className='flexCenter'>
            <StyledCredentialsText lang={locale} href='tel:+38(093)1755333'>
              +38 (093) 175 53 33
            </StyledCredentialsText>
            <StyledAirplaneImage
              src={ICONS.PAPER_AIRPLANE}
              width={20}
              alt='Paper airplane'
            />
          </div>
        </StyledCredentialContainer>
      </StyledFooterCredsContainer>
      <StyledSiteInfoContainer>
        <Link href='./'>
          <StyledFooterLogo
            src={IMAGES.LOGO_2}
            alt='footer logo'
            width={168}
            height={60}
          />
        </Link>
        <StyledCopyrightText preset={TEXT_PRESETS.REG_16}>
          ©2022 Stay.ua - All rights reserved.
        </StyledCopyrightText>
        <StyledLinksContainer style={styles}>
          {renderSiteLinks()}
        </StyledLinksContainer>
        <StyledLinksContainer style={{ marginTop: 42 }}>
          {renderExternalLinks()}
        </StyledLinksContainer>
      </StyledSiteInfoContainer>
      <StyledSubscribeContainer>
        <SubscribeText preset={TEXT_PRESETS.LIGHT_20}>
          {footer.subscribeText}
        </SubscribeText>
        <StyledFieldContainer>
          <ExtendedTextField
            buttonText={footer.buttonText}
            placeholder={footer.placeholder}
            value={email}
            setExtendedValue={setEmail}
            buttonAction={onSubscribeClick}
          />
        </StyledFieldContainer>
      </StyledSubscribeContainer>
    </StyledMainFooterContainer>
  );
};
