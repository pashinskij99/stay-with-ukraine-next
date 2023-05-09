import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

export const StyledMainContainer = styled.div`
  padding: 32px 130px 32px 130px;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 32px 20px 32px 20px;
  }
`;

export const StyledNewsItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid ${COLORS.LIGHT_GREY};

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledEmptyText = styled(ExtendedText)`
  color: ${COLORS.BLACK};
`;
