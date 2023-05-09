import styled from 'styled-components';

import { GeneralH2 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

type InputType = {
  isbig: boolean;
  issmallscreen?: boolean | 0 ;
};

type SubmitButtonType = {
  isDisabled: boolean
}

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 50px 100px 50px;

  @media screen and (max-width: 500px) {
    padding: 50px 20px;
  }
`;

export const StyledTitle = styled(GeneralH2)`
  margin-bottom: 58px;
`;

export const StyledInputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 100vw;
`;

const getInputWidth = (isbig: boolean, issmallscreen?: boolean | 0 ) => {
  if(issmallscreen) return `calc(100% - 24px)`;
  if(!issmallscreen && isbig) return 'calc(100% - 24px)';
  if(!issmallscreen && !isbig) return `calc(50% - 24px)`
}

export const StyledInputContainer = styled.div<InputType>`
  width: ${({ isbig, issmallscreen }) => getInputWidth(isbig, issmallscreen)};
`;


export const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const StyledButton = styled.button<SubmitButtonType>`
  padding: 23px 78px;
  border-radius: 60px;
  background-color: ${({isDisabled}) => isDisabled ? `${COLORS.LIGHT_GREY_2}` : `${COLORS.YELLOW}`};
  border: none;
  color: ${COLORS.BLACK};
  text-transform: uppercase;
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 30px -10px yellow;
  }
`;

export const StyledSelectContainer = styled.div`
  width: 100%;
  height: 64px;
  padding-right: 24px;

  @media screen and (max-width: 500px) {
    padding-right: 24px;
  }

  @media screen and (max-width: 460px) {
    padding-right: 0;
  }
`;