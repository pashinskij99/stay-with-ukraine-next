import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

export type LangType = {
  lang: 'en' | 'uk';
};

export type ContainerType = {
  height?: string;
}

export type ButtonContainerType = {
  isIcon?: boolean;
}

export const StyledForm = styled.form<ContainerType>`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${({height}) => height ? height : '64px'};
  border-radius: 60px;
  border: 1px solid ${COLORS.LIGHT_GREY};
  padding: 6px 6.2px 6px 24px;

  @media screen and (max-width: 460px) {
    width: 400px;
    max-width: calc(100% + 24px);
  }

  @media screen and (max-width: 460px) {
    width: 90vw;
  }

  @media screen and (max-width: 375px) {
    width: 335px;
  }
`;

export const StyledInput = styled.input`
  background-color: ${COLORS.WHITE};
  border: none;
  border-radius: 60px;
  flex: 1;
  outline: none;
  color: ${COLORS.BLACK};
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  @media screen and (max-width: 500px) {
    max-width: 40%;
  };

  ::placeholder {
    font-family: 'MyriadPro-Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${COLORS.SECONDARY_GREY};
  }
`;

export const StyledErrorContainer = styled.div`
  position: absolute;
  left: 25px;
  bottom: -25px;
`;

export const StyledErrorText = styled.div`
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: red;
`;

export const StyledButtonContainer = styled.div<ButtonContainerType>`
  min-height: 100%;
  width: ${({isIcon}) => isIcon && '52px'};

  @media screen and (max-width: 500px) {
    width: ${({isIcon}) => isIcon && '44px'};
  };
`;
