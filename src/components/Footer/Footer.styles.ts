import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

export type LangType = {
  lang: string;
};

export const StyledMainFooterContainer = styled.div`
  height: 598px;
  background-color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 84px;

  @media screen and (max-width: 960px) {
    justify-content: center;
    height: auto;
    padding-bottom: 40px;
    padding: 0 20px 40px;
  }

  @media screen and (max-width: 375px) {
    padding: 0 20px 40px 20px;
  }
`;

export const StyledFooterCredsContainer = styled.div`
  display: flex;
  height: 140px;
  width: 100%;
  border-top: 1px solid ${COLORS.LIGHT_GREY};
  border-bottom: 1px solid ${COLORS.LIGHT_GREY};

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: none;
    height: auto;
    margin-bottom: 40px;
  }
`;

export const StyledCredentialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media screen and (max-width: 1300px) {
    flex-direction: column;
    border-bottom: 1px solid ${COLORS.LIGHT_GREY};
    width: 100%;
    padding: 24px 0;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    border-bottom: 1px solid ${COLORS.LIGHT_GREY};
    width: 100%;
    padding: 24px 0;
  }
`;

export const StyledSeparator = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${COLORS.LIGHT_GREY};

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const StyledCredentialsField = styled(ExtendedText)`
  color: ${COLORS.SECONDARY_GREY};

  @media screen and (max-width: 960px) {
    margin-bottom: 8px;
  }
`;

export const StyledCredentialsText = styled(Link)<LangType>`
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  color: ${COLORS.BLACK};
  font-family: 'Pragmatica-Medium', sans-serif;
  margin-left: 40px;
  text-transform: uppercase;

  @media screen and (max-width: 1300px) {
    margin-left: 0;
    margin-top: 5px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    line-height: 30px;
    margin-left: 0;
    margin-top: 0;
  }
`;

export const StyledAirplaneImage = styled(Image)`
  margin-left: 24px;
`;

export const StyledSiteInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 52px 0;

  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const StyledFooterLogo = styled(Image)``;

export const StyledCopyrightText = styled(ExtendedText)`
  color: ${COLORS.SECONDARY_GREY_2};
  margin: 16px 0 50px 0;

  @media screen and (max-width: 960px) {
    margin: 35px 0 0 0;
  }
`;

export const StyledFooterLink = styled(ExtendedText)`
  text-transform: uppercase;
  color: ${COLORS.BLACK};
  margin: 0 32px;
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const StyledExternalLink = styled(Image)``;

export const StyledSubscribeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 113px;
  border-top: 1px solid ${COLORS.LIGHT_GREY};

  @media screen and (max-width: 960px) {
    flex-direction: column;
    border: none;
    margin-top: 35px;
  }
`;

export const SubscribeText = styled(ExtendedText)`
  color: ${COLORS.BLACK};
  margin-right: 24px;
  opacity: 0.8;

  @media screen and (max-width: 960px) {
    margin: 0 0 24px 0;
  }
`;

export const StyledFieldContainer = styled.div`
  max-width: 480px;
  width: 480px;

  @media screen and (max-width: 500px) {
    width: auto;
  }
`;
