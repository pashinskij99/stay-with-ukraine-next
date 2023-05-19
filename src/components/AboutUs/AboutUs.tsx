import { FC } from 'react';
import { Settings } from 'react-slick';
import map from 'lodash/map';

import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
import { GeneralH2 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

import { aboutUsData } from '../../data/AboutUs.data';
import { AboutUsItem } from '../AboutUsItem';

import { StyledMainContainer, StyledSlider } from './AboutUs.styles';

export const AboutUs: FC = () => {
  const locale = getLocale();
  const { mediaAboutUs } = strings[locale];
  const { width } = useWindowDimensions();
  const screenSizeCheck = !!width && width < 1157;

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: screenSizeCheck ? 1 : 2,
    slidesToScroll: screenSizeCheck ? 1 : 2,
    arrows: false,
  };

  const renderItems = () => {
    return map(aboutUsData, (item) => (
      <AboutUsItem
        key={`about-us-item-${item.author.name}-${item.author.subName}`}
        item={item}
      />
    ));
  };

  return (
    <StyledMainContainer>
      <GeneralH2 color={COLORS.BLACK} lang={locale}>{mediaAboutUs.title}</GeneralH2>
      <StyledSlider {...settings}>{renderItems()}</StyledSlider>
    </StyledMainContainer>
  );
};
