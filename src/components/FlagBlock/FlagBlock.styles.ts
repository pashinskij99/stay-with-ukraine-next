import styled from 'styled-components';

import { GeneralMainPageTitle } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

import { IMAGES } from '#/*';

export const StyledMainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  height: 420px;
  background-image: url(${IMAGES.BACKGROUND_FLAG.default.src});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 65px;

  @media screen and (max-width: 1000px) {
    background-size: auto;
  }

  @media screen and (max-width: 500px) {
    height: 315px;
    padding-bottom: 67px;
  }
`;

export const StyledTitle = styled(GeneralMainPageTitle)`
  margin-bottom: 40px;

  @media screen and (max-width: 500px) {
    margin-bottom: 32px;
  }
`;

export const StyledTextFieldContainer = styled.div`
  max-width: 740px;
  width: 740px;
  height: 66px;
  background-color: ${COLORS.WHITE};
  border-radius: 74px;

  @media screen and (max-width: 800px) {
    width: 90vw;
    max-width: 90vw;
  }

  @media screen and (max-width: 500px) {
    height: 60px;
  }
`;
