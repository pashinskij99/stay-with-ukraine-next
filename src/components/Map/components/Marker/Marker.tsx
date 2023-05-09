import { TEXT_PRESETS } from '@/components/ExtendedText/ExtendedText.types';

import {
  StyledBigCircle,
  StyledCountryName,
  StyledLocation,
  StyledMainContainer,
  StyledMarkerInfoContainer,
  StyledSmallCircle,
} from './Marker.styles';
import { MarkerProps } from './Marker.types';

export const Marker: React.FC<MarkerProps> = ({
  marker,
  activeMarker,
  onClick,
}) => {
  const isActiveMarker = activeMarker.country === marker.country;

  return (
    <StyledMainContainer
      top={marker.top}
      left={marker.left}
      isActive={isActiveMarker}
    >
      <StyledMarkerInfoContainer isActive={isActiveMarker}>
        <StyledCountryName preset={TEXT_PRESETS.REG_16}>
          {marker.country}
        </StyledCountryName>
        <StyledLocation>{marker.location}</StyledLocation>
      </StyledMarkerInfoContainer>
      <StyledBigCircle
        onClick={() => onClick(marker)}
        isActive={isActiveMarker}
      >
        <StyledSmallCircle isActive={isActiveMarker} />
      </StyledBigCircle>
    </StyledMainContainer>
  );
};
