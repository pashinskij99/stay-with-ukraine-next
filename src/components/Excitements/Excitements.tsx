import { FC, useMemo } from 'react';
import Slider from 'react-slick';
import map from 'lodash/map';

import { excitementsData } from '@/data';
import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

import {
  StyledCarouselContainer,
  StyledCarouselItem,
  StyledImage,
  StyledMainContainer,
  StyledTitle,
} from './Excitements.styles';

export const Excitements: FC = () => {
  const locale = getLocale();
  const { excitements } = strings[locale];
  const { width } = useWindowDimensions();

  const getSlidesToShow = useMemo(() => {
    if (width)
      switch (true) {
        case width < 1000:
          return 3;

        case width < 800:
          return 2;

        default:
          return 4;
      }
  }, [width]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: getSlidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
  };


  const renderItems = () => {
    return map(excitementsData, (item) => (
      <StyledCarouselItem key={`excitement-item-${item.id}`}>
        <StyledImage alt='excitement-item' src={item.content} />
      </StyledCarouselItem>
    ));
  };

  return (
    <StyledMainContainer>
      <StyledTitle color={COLORS.BLACK} lang={locale}>{excitements.title}</StyledTitle>
      <StyledCarouselContainer>
        <Slider {...settings}>{renderItems()}</Slider>
      </StyledCarouselContainer>
    </StyledMainContainer>
  );
};
