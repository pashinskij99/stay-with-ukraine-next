import { useCallback, useEffect, useState } from 'react';

import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

import { ExtendedButton } from '../ExtendedButton';
import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';

import { Marker, MarkerType } from './components';
import {
  StyledMainContainer,
  StyledMap,
  StyledSubtitle,
  StyledTextContainer,
  StyledTitle,
} from './Map.styles';
import { MapProps } from './Map.types';

export const Map: React.FC<MapProps> = ({
  buttonLink,
  buttonText,
  isMainPage,
}) => {
  const locale = getLocale();
  const { map } = strings[locale];
  const [activeMarker, setActiveMarker] = useState(map.markers[0]);
  const { width } = useWindowDimensions();
  const windowSizeCheck = width && width < 850;

  useEffect(() => {
    setActiveMarker(map.markers[0]);
  }, [map.markers]);

  const renderMarkers = useCallback(() => {
    return map.markers.map((item: MarkerType) => (
      <Marker
        key={`map-marker-${item.country}`}
        marker={item}
        activeMarker={activeMarker}
        onClick={setActiveMarker}
      />
    ));
  }, [map.markers, activeMarker]);

  return (
    <StyledMainContainer isMainPage={isMainPage}>
      <StyledTextContainer>
        <StyledTitle color={COLORS.WHITE} lang={locale}>
          {map.title}
        </StyledTitle>
        <StyledSubtitle preset={TEXT_PRESETS.LIGHT_20}>
          {map.subtitle}
        </StyledSubtitle>
      </StyledTextContainer>
      <ExtendedButton
        link={buttonLink}
        preset='primary'
        title={buttonText ? buttonText : map.buttonText}
      />
      <StyledMap>{renderMarkers()}</StyledMap>
    </StyledMainContainer>
  );
};
