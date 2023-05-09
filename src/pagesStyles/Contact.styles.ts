import styled from 'styled-components';

import { ExtendedText } from '@/components';
import { GeneralH2, GeneralH3 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

export type InputType = {
  isbig: boolean;
  issmallscreen?: boolean | 0;
};

export type SubmitButtonType = {
  isDisabled: boolean;
};

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 50px;

  @media screen and (max-width: 500px) {
    padding: 50px 20px;
  }
`;

export const StyledTitle = styled(GeneralH2)`
  margin-bottom: 50px;

  @media screen and (max-width: 500px) {
    margin-bottom:30px;
  }
`;

export const StyledSubtitle = styled(ExtendedText)`
  text-align: center;
  color: ${COLORS.BLACK};
  margin-bottom: 58px;

  @media screen and (max-width: 440px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom:30px;
  }
`;

export const StyledInputsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const getInputWidth = (isbig: boolean, issmallscreen?: boolean | 0) => {
  if (issmallscreen) return `calc(100% - 24px)`;
  if (!issmallscreen && isbig) return 'calc(100% - 24px)';
  if (!issmallscreen && !isbig) return `calc(50% - 24px)`;
};

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
  background-color: ${({ isDisabled }) =>
    isDisabled ? `${COLORS.LIGHT_GREY_2}` : `${COLORS.YELLOW}`};
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
