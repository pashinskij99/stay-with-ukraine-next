export type MarkerType = {
  left: string;
  top: string;
  country: string;
  location: string;
} 

export type MarkerProps = {
  marker: MarkerType;
  activeMarker: MarkerType;
  onClick: (marker: MarkerType) => void;
}