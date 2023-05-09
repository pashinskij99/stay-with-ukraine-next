import {
  StyledInfoContainer,
  StyledItemContainer,
  StyledName,
  StyledNameInfoContainer,
  StyledOccupation,
  StyledPersonImage,
  StyledText,
} from './TheyAreWithUsItem.styles';
import { TheyAreWithUsItemProps } from './TheyAreWithUsItem.types';

export const TheyAreWithUsItem: React.FC<TheyAreWithUsItemProps> = ({
  data,
}) => {
  return (
    <StyledItemContainer>
      <StyledPersonImage
        alt={`${data.name}-person`}
        fill={true}
        src={data.photo}
      />
      <StyledInfoContainer>
        <StyledNameInfoContainer>
          <StyledName>{data.name}</StyledName>
        </StyledNameInfoContainer>
        <StyledOccupation>{data.occupation}</StyledOccupation>
        {data.text && <StyledText>{data.text}</StyledText>}
      </StyledInfoContainer>
    </StyledItemContainer>
  );
};
