import Image from 'next/image';
import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

export const StyledItemContainer = styled.div`
  position: relative;
  width: 378px;
  height: 482px;
  border-radius: 8px;

  ::before {
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 150px;
    background-image: linear-gradient(${COLORS.BLACK} 5%, transparent);
    transform: rotate(180deg);
    z-index: 100;
    position: absolute;
    border-radius: 8px;
  }

  @media screen and (max-width: 900px) {
    width: 50vw;
    height: 600px;
  }

  @media screen and (max-width: 600px) {
    width: calc(100vw - 40px);
    height: 600px;
  }

  @media screen and (max-width: 400px) {
    width: calc(100vw - 40px);
    height: 482px;
  }
`;

export const StyledPersonImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 8px;
`;

export const StyledInfoContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 24px;

  @media screen and (max-width: 500px) {
    padding: 16px;
  }
`;

export const StyledNameInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  z-index: 110;
`;

export const StyledName = styled.span`
  font-family: 'Pragmatica-Bold', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: ${COLORS.WHITE};

  @media screen and (max-width: 500px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const StyledOccupation = styled.span`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${COLORS.WHITE};
  margin: 8px 0 16px 0;
  max-width: 100%;
  white-space: pre-line;
  z-index: 110;
`;

export const StyledText = styled.p`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${COLORS.WHITE};
  max-width: 100%;
  margin-top: 8px;
  white-space: normal;
  z-index: 110;
`;
