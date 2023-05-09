import styled from 'styled-components';

import {
  AboutUs,
  AreasOfActivity,
  Excitements,
  LatestNews,
  Map,
  OurFriends,
  StayWithUkraine,
  TheyAreWithUs,
} from '@/components';
import { COLORS } from '@/utils/colors';

import { IMAGES } from '../../public';
import { MetaLayer } from '../components/MetaLayer/MetaLayer';

const StyledBackground = styled.div`
  background-image: url(${IMAGES.BACKGROUND.default.src});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;

  @media screen and (max-width: 500px) {
    background-image: url(${IMAGES.MOBILE_YELLOW_BG.default.src});
    background-size: 100% 300%;
    background-position: 0;
  }
`;

export default function Home() {
  //! TODO: Add to MetaLayer description and children!
  //! TODO: Uncomment the components when they are needed!
  return (
    <MetaLayer
      title='Stay With Ukraine'
      description='The organization created with the sole purpose of helping the Ukrainian people and saving as many lives as possible through any means possible'
      backgroundColor={COLORS.BLACK}
      headerStyle='transparent'
    >
      <StayWithUkraine />
      <AreasOfActivity />
      <StyledBackground>
        <LatestNews />
        {/* <OurFriends /> */}
        {/* <TheyAreWithUs /> */}
        <Map isMainPage={true} buttonLink='/contact' />
      </StyledBackground>
      {/* <AboutUs /> */}
      {/* <Excitements /> */}
    </MetaLayer>
  );
}
