import styled from 'styled-components';

import { ExtendedText } from '@/components/ExtendedText';
import { COLORS } from '@/utils/colors';

type MarkerPositionType = {
  top: string;
  left: string;
};

type MarkerType = {
  isActive: boolean;
};

export const StyledMainContainer = styled.div<MarkerType & MarkerPositionType>`
  position: relative;
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
`;

export const StyledMarkerInfoContainer = styled.div<MarkerType>`
  position: absolute;
  display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
  height: auto;
  top: -10px;
  left: -15px;
  transform: translateY(-100%);
  flex-direction: column;
  align-items: center;
`;

export const StyledCountryName = styled(ExtendedText)`
  text-align: center;
  color: ${COLORS.WHITE};
`;

export const StyledLocation = styled.span`
  font-family: 'HelveticaNeueCyr', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  color: ${COLORS.LIGHT_GREY_2};
`;

export const StyledBigCircle = styled.div<MarkerType>`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? COLORS.YELLOW : 'rgba(255, 255, 255, 0.5)'};
  display: flex;
  justify-content: center;
  align-items: center;

  animation: zoomInOut 1.5s ease-in infinite alternate;

  @keyframes zoomInOut {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const StyledSmallCircle = styled.div<MarkerType>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? COLORS.BLACK : COLORS.WHITE};
`;
