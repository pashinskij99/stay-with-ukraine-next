import styled from 'styled-components';

type GeneralHType = {
  color: string;
  lang: 'en' | 'uk';
};

export const GeneralH2 = styled.h2<GeneralHType>`
  color: ${({ color }) => color};
  font-family: 'Pragmatica-Medium', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 72px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: -1px;

  @media screen and (max-width: 839px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media screen and (max-width: 500px) {
    font-size: 26px;
    line-height: 38px;
  }
`;

export const GeneralH3 = styled.h3<GeneralHType>`
  color: ${({ color }) => color};
  font-family: 'Pragmatica-Bold', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  text-transform: uppercase;
  letter-spacing: -1px;

  @media screen and (max-width: 839px) {
    font-size: 24px;
    line-height: 34px;
  }

  @media screen and (max-width: 500px) {
    font-size: 22px;
    line-height: 32px;
  }
`;
