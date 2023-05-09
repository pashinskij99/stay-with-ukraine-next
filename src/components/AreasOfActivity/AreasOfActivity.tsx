import { map } from 'lodash';

import strings, { getLocale } from '@/locales';
import { COLORS } from '@/utils/colors';

import { ICONS } from '../../../public';
import { ActivityAreaItem } from '../ActivityAreaItem';

import {
  StyledAreasOfActivityContainer,
  StyledAreasOfActivityImage,
  StyledAreasOfActivitySubtitle,
  StyledAreasOfActivityTitle,
} from './AreasOfActivity.styles';

export const AreasOfActivity: React.FC = () => {
  const locale = getLocale();
  const { areasOfActivity } = strings[locale];

  const renderAreas = () => {
    return map(areasOfActivity.items, (item, index) => (
      <ActivityAreaItem key={`area-of-activity-${item.title}`} data={item} isLastIndex={index === areasOfActivity.items.length - 1} />
    ));
  };

  return (
    <StyledAreasOfActivityContainer id='ourAreasOfActivity'>
      <StyledAreasOfActivityImage
        alt='cross logo'
        src={ICONS.CROSS_LOGO}
        width={66}
        height={66}
      />
      <StyledAreasOfActivitySubtitle>
        {areasOfActivity.subtitle}
      </StyledAreasOfActivitySubtitle>
      <StyledAreasOfActivityTitle color={COLORS.BLACK} lang={locale}>
        {areasOfActivity.title}
      </StyledAreasOfActivityTitle>
      {renderAreas()}
    </StyledAreasOfActivityContainer>
  );
};
