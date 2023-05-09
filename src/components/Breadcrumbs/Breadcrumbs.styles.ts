import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

import { ExtendedText } from '../ExtendedText';

export const StyledMainContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 80px;
  white-space: pre-wrap;
  z-index: 900;
`;

export const StyledPrevPath = styled(ExtendedText)`
  text-align: center;
  color: ${COLORS.WHITE};
  text-transform: capitalize;
`;

export const StyledCurrentPath = styled(ExtendedText)`
  text-align: center;
  color: ${COLORS.SECONDARY_GREY};
  text-transform: capitalize;
`;
