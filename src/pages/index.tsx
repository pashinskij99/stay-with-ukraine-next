import Script from 'next/script'
import styled from 'styled-components'

import {
  AboutUs,
  AreasOfActivity,
  Excitements,
  LatestNews,
  Map,
  OurFriends,
  StayWithUkraine,
  TheyAreWithUs,
} from '@/components'
import { getLocale } from '@/locales'
import { COLORS } from '@/utils/colors'

import { IMAGES } from '../../public'
import { MetaLayer } from '../components/MetaLayer/MetaLayer'

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
`

export default function Home() {
  //! TODO: Add to MetaLayer description and children!
  //! TODO: Uncomment the components when they are needed!
  const locale = getLocale()
  return (
    <MetaLayer
      title='Stay With Ukraine | Stay UA'
      description={
        locale === 'en'
          ? 'Stay UA was created to save as many lives as possible. Our organization brings together genuine supporters of Ukraine.'
          : 'Організація Stay UA була створена, щоб об’єднати щирих прихильників України та співпрацювати з іншими організаціями та фондами.'
      }
      backgroundColor={COLORS.BLACK}
      headerStyle='transparent'
      headChildren={
        <>
          <link rel='alternate' hrefLang='en' href='https://www.stayua.com/' />
          <link rel='alternate' hrefLang='uk' href='https://www.stayua.com/uk' />
        </>
      }>
      <Script id='organization-structured-data' strategy='afterInteractive' type='application/ld+json'>
        {`
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Stay With Ukraine",
          "alternateName": "Stay UA",
        "description": "Stay UA was created to save as many lives as possible. Our organization brings together genuine supporters of Ukraine.",
          "url": "https://www.stayua.com/",
          "logo": "https://www.stayua.com/_next/static/media/logo.c6c2d9c5.svg",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+38 (093) 175 53 33",
            "email": "general@stayua.com",
            "contactType": "customer service"
          },
          "sameAs": [
            "https://www.facebook.com/StayWithUa",
            "https://twitter.com/StayWithUkrainn",
        "https://www.linkedin.com/company/stay-with-ukraine/"
          ]`
        }
      </Script>
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
  )
}
