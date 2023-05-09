import styled from 'styled-components';

import { COLORS } from '@/utils/colors';

export const StyledMultyForm = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 120px;
  border-radius: 20px;
  border: 1px solid ${COLORS.LIGHT_GREY};
  padding: 20px 30px ;

  @media screen and (max-width: 460px) {
    width: 400px;
    max-width: calc(100% + 24px);
  }

  @media screen and (max-width: 375px) {
    width: 335px;
  }
`;

export const StyledMultyInput = styled.textarea`
  height: 100%;
  background-color: ${COLORS.WHITE};
  border: none;
  flex: 1;
  outline: none;
  color: ${COLORS.BLACK};
  font-family: 'MyriadPro-Regular', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  resize: none;

  ::placeholder {
    font-family: 'MyriadPro-Regular', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: ${COLORS.SECONDARY_GREY};
  }
`;
