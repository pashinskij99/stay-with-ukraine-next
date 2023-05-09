import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

export const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  z-index: 10000;
  background-color: ${COLORS.BLACK};
  overflow: hidden;
  overscroll-behavior-y: contain;
  svg {
    width: 100%;
    height: 100%;
    opacity: 0;

    @media screen and (max-width: 500px) {
      transform-box: fill-box;
      transform-origin: 50% 50%;
      transform: scale(7);
    }
  }
`;