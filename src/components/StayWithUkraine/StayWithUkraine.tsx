import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

import strings, { getLocale } from '@/locales';

import { ICONS } from '../../../public/icons';
import { NEWS_IMAGES,SLIDES } from '../../../public/images';
import BrestFortress from '../../../public/images/animation/brest-fortress.webp';
import WarFearImage from '../../../public/images/animation/war-fear.webp';
import { ExtendedButton } from '../ExtendedButton';
import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';

import {
  StyledAnimationBlock,
  StyledAnimationContainer,
  StyledAnimationItem,
  StyledArrowContainer,
  StyledBottomShadow,
  StyledIcon,
  StyledMainContainer,
  StyledSubtitle,
  StyledTextContainer,
  StyledTitle,
} from './StayWithUkraine.styles';

const warImages1 = [
  NEWS_IMAGES.PRESIDENT_BIG,
  SLIDES.SWU_SLIDE_1,
  SLIDES.SWU_SLIDE_3,
  SLIDES.SWU_SLIDE_5,
  SLIDES.SWU_SLIDE_7,
];
const warImages2 = [
  BrestFortress,
  WarFearImage,
  SLIDES.SWU_SLIDE_2,
  SLIDES.SWU_SLIDE_4,
  SLIDES.SWU_SLIDE_6,
];

export const StayWithUkraine: React.FC = () => {
  const locale = getLocale();
  const { stayWithUa } = strings[locale];

  const blockAnimation1Ref = useRef<HTMLDivElement>(null);
  const blockAnimation2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.to(blockAnimation1Ref.current, {
      duration: 30,
      y: '-50%',
      repeat: -1,
      ease: 'none',
    });
    gsap.to(blockAnimation2Ref.current, {
      duration: 30,
      y: '50%',
      repeat: -1,
      ease: 'none',
    });
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.querySelector('#ourAreasOfActivity');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledMainContainer>
      <StyledTextContainer>
        <StyledTitle lang={locale}>Stay with Ukraine</StyledTitle>
        <StyledSubtitle preset={TEXT_PRESETS.LIGHT_20}>
          {stayWithUa.subtitle}
        </StyledSubtitle>
        <div>
          <ExtendedButton
            link='/help-Ukraine'
            preset='primary'
            title={stayWithUa.helpButton}
          />
        </div>
      </StyledTextContainer>
      <StyledAnimationContainer>
        <StyledAnimationBlock top='0' left='0' ref={blockAnimation1Ref}>
          {[...warImages1, ...warImages1].map((img, index) => (
            <StyledAnimationItem key={index}>
              <Image src={img} alt='war-img' sizes="100%"/>
            </StyledAnimationItem>
          ))}
        </StyledAnimationBlock>
        <StyledAnimationBlock bottom='0' right='0' ref={blockAnimation2Ref}>
          {[...warImages2, ...warImages2].map((img, index) => (
            <StyledAnimationItem key={index}>
              <Image src={img} alt='war-img' sizes="100%"/>
            </StyledAnimationItem>
          ))}
        </StyledAnimationBlock>
        <StyledBottomShadow />
      </StyledAnimationContainer>
      <StyledArrowContainer>
        <Link href='#ourAreasOfActivity' onClick={handleClick}>
          <StyledIcon
            alt='arrow down'
            src={ICONS.ARROW_DOWN}
            width={32}
            height={32}
          />
        </Link>
      </StyledArrowContainer>
    </StyledMainContainer>
  );
};
