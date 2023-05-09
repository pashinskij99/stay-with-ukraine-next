import styled from 'styled-components';

import { GeneralH2 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

type PositionType = {
  isMainPage?: boolean;
}

export const StyledMainContainer = styled.div<PositionType>`
  background-color: ${({isMainPage}) => isMainPage === false && COLORS.BLACK};
  padding: 100px 130px 10px 130px;

  @media screen and (max-width: 1395px) {
    padding: 100px 100px 10px 100px;
  }

  @media screen and (max-width: 1266px) {
    padding: 100px 80px 10px 80px;
  }

  @media screen and (max-width: 900px) {
    padding: 80px 80px 10px 80px;
  }

  @media screen and (max-width: 700px) {
    padding: 60px 40px 47px 40px;
  }

  @media screen and (max-width: 500px) {
    padding: 60px 20px 47px 20px;
  }
`;

export const StyledTitle = styled(GeneralH2)`
  margin-bottom: 50px;

  @media screen and (max-width: 500px) {
    margin-bottom: 32px;
  }
`;

export const StyledNewsContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledSecondaryNewsContainer = styled.div`
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-left: 0;
    border-top: 0.5px solid rgba(255,255,255, 0.1);
    border-bottom: 0.5px solid rgba(255,255,255, 0.1);
  }

  @media screen and (max-width: 1200px) {
    border-bottom: none;
  }
`;

export const StyledButtonContainer = styled.div<PositionType>`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  width: '100%';
  margin-bottom: ${({isMainPage}) => isMainPage === false && '100px'};

  @media screen and (max-width: 500px) {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
