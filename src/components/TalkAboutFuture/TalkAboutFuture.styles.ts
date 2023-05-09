import styled from 'styled-components';

import { GeneralH2 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 0 93px 0;
  background-color:${COLORS.WHITE};

  @media screen and (max-width: 500px) {
    padding: 60px 20px;
  }
`;

export const StyledTitle = styled(GeneralH2)`
  max-width: 800px;
`;

export const StyledSubtitle = styled(ExtendedText)`
  text-align: center;
  color: ${COLORS.SECONDARY_GREY};
  margin: 16px 0 40px 0;

  @media screen and (max-width: 500px) {
    margin: 16px 0 24px 0;
  }
`;