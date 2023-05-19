import { FC, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

import { PreloaderContainer } from './Preloader.styles';

interface Props {
  isLoading: boolean;
}

export const Preloader: FC<Props> = ({ isLoading }) => {
  const preloaderContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.set('#preloaderSVG', {opacity: 1})
    const preloaderTL = gsap
      .timeline({ repeat: -1, repeatDelay: 0.3, paused: true })
      .set('#rect1', { transformOrigin: '50% 100%', scaleY: '0' })
      .set('#rect2', { transformOrigin: '100% 50%', scaleX: '0' })
      .set('#rect3', { transformOrigin: '50% 0%', scaleY: '0' })
      .set('#rect4', { transformOrigin: '0% 50%', scaleX: '0' })
      .set('#SVGID_2_', { x: -100 })
      .to('#rect1', { duration: 0.4, scaleY: '1', ease: 'sine.inOut' })
      .to('#rect2', { duration: 0.4, scaleX: '1', ease: 'sine.inOut' }, '<+0.2')
      .to('#rect3', { duration: 0.4, scaleY: '1', ease: 'sine.inOut' }, '<+0.2')
      .to('#rect4', { duration: 0.4, scaleX: '1', ease: 'sine.inOut' }, '<+0.2')
      .to('#SVGID_2_', { duration: 0.6, x: 0, ease: 'sine.in' }, '<+0.1')

      .to('#rect1', {
        duration: 0.4,
        scaleY: '0',
        transformOrigin: '50% 0%',
        ease: 'sine.inOut',
        delay: 1,
      })
      .to(
        '#rect2',
        {
          duration: 0.4,
          scaleX: '0',
          transformOrigin: '0% 50%',
          ease: 'sine.inOut',
        },
        '<',
      )
      .to(
        '#rect3',
        {
          duration: 0.4,
          scaleY: '0',
          transformOrigin: '50% 100%',
          ease: 'sine.inOut',
        },
        '<',
      )
      .to(
        '#rect4',
        {
          duration: 0.4,
          scaleX: '0',
          transformOrigin: '100% 50%',
          ease: 'sine.inOut',
        },
        '<',
      )
      .to(
        '#rectG',
        {
          duration: 0.4,
          transformOrigin: '50% 50%',
          rotation: '90',
          ease: 'sine.inOut',
        },
        '<',
      )
      .to('#SVGID_2_', { duration: 0.5, x: 100, ease: 'sine.inOut' }, '<');

    if (isLoading) {
      preloaderTL.play();
    } else {
      gsap
        .timeline()
        .to(preloaderContainerRef.current, {
          duration: 0.3,
          opacity: 0,
          ease: 'sine.inOut',
        })
        .set(preloaderContainerRef.current, { display: 'none' })
        .add(preloaderTL.pause());
    }
  }, [isLoading]);

  return (
    <PreloaderContainer ref={preloaderContainerRef}>
      <svg
        id='preloaderSVG'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 1440 780'
        enableBackground='new 0 0 1440 780'
        xmlSpace='preserve'
      >
        <rect x='-8.51' y='-21.74' width='1473.7' height='824.17' />
        <g>
          <defs>
            <rect
              id='SVGID_1_'
              x='699.5'
              y='355.62'
              width='101.18'
              height='71.83'
            />
          </defs>
          <clipPath id='SVGID_2_'>
            <use xlinkHref='#SVGID_1_' overflow='visible' />
          </clipPath>
          <g clipPath='url(#SVGID_2_)'>
            <g id='text'>
              <path
                fill='#FFFFFF'
                d='M709.11,379.92c-1.7,0-3.02-0.34-3.96-1.03c-0.94-0.68-1.41-1.63-1.41-2.84v-0.77h2.36v0.82
                c0,0.71,0.26,1.26,0.8,1.66s1.27,0.6,2.21,0.6s1.68-0.2,2.23-0.61c0.54-0.41,0.81-0.96,0.81-1.67c0-0.72-0.26-1.33-0.8-1.84
                c-0.53-0.48-1.54-1.06-3.04-1.72c-1.72-0.75-2.9-1.47-3.56-2.17c-0.63-0.69-0.95-1.53-0.95-2.52c0-1.19,0.47-2.13,1.41-2.81
                c0.94-0.68,2.26-1.02,3.96-1.02c1.7,0,3,0.34,3.91,1.03c0.91,0.69,1.36,1.63,1.36,2.84v0.51h-2.33v-0.55
                c0-0.71-0.26-1.26-0.77-1.66c-0.51-0.4-1.24-0.6-2.18-0.6c-0.9,0-1.61,0.2-2.13,0.59c-0.52,0.39-0.78,0.93-0.78,1.6
                c0,0.68,0.28,1.26,0.83,1.75c0.53,0.46,1.56,1.03,3.1,1.72c1.66,0.74,2.81,1.47,3.47,2.19c0.63,0.68,0.95,1.54,0.95,2.58
                c0,1.21-0.49,2.16-1.46,2.86C712.17,379.57,710.83,379.92,709.11,379.92z'
              />
              <path
                fill='#FFFFFF'
                d='M723.1,379.69h-2.45v-13.88h-4.39v-1.59h11.23v1.59h-4.39V379.69z'
              />
              <path
                fill='#FFFFFF'
                d='M739.48,379.69h-2.51l-0.95-3.29h-5.83l-0.92,3.29h-2.33l4.57-15.47h3.34L739.48,379.69z M733.07,366.23
                l-2.42,8.62h4.91L733.07,366.23z'
              />
              <path
                fill='#FFFFFF'
                d='M746.35,379.69h-2.48v-6.76l-4.97-8.71h2.67l3.65,6.54l3.65-6.54h2.46l-4.97,8.71L746.35,379.69
                L746.35,379.69z'
              />
              <path
                fill='#FFFFFF'
                d='M709.91,397.74h-3.28l-3.13-15.47h2.39l2.58,13.11l2.76-13.11h2.61l2.73,13.11l2.61-13.11h2.21
                l-3.16,15.47h-3.1l-2.61-12.18L709.91,397.74z'
              />
              <path
                fill='#FFFFFF'
                d='M726.35,397.74h-2.46v-15.47h2.46V397.74z'
              />
              <path
                fill='#FFFFFF'
                d='M735.65,397.74h-2.46v-13.88h-4.39v-1.59h11.23v1.59h-4.39V397.74z'
              />
              <path
                fill='#FFFFFF'
                d='M744.94,397.74h-2.46v-15.47h2.46v6.72h6.17v-6.72h2.45v15.47h-2.45v-7.18h-6.17V397.74z'
              />
              <path
                fill='#FFFFFF'
                d='M704.33,411.93v-11.63h2.46v11.74c0,1.58,1,2.37,3,2.37c2.02,0,3.04-0.79,3.04-2.37v-11.74h2.39v11.63
                c0,1.3-0.47,2.3-1.41,3.01c-0.94,0.71-2.29,1.06-4.05,1.06s-3.1-0.35-4.03-1.06C704.8,414.23,704.33,413.23,704.33,411.93z'
              />
              <path
                fill='#FFFFFF'
                d='M730.4,415.78h-2.64l-4.23-7.87l-2.52,2.74v5.13h-2.46v-15.47h2.46v7.76l6.72-7.76h2.58l-5.09,5.81
                L730.4,415.78z'
              />
              <path
                fill='#FFFFFF'
                d='M735.28,415.78h-2.46v-15.47h5.25c1.88,0,3.26,0.3,4.14,0.89c0.88,0.6,1.32,1.52,1.32,2.77v0.69
                c0,1.8-0.96,2.9-2.88,3.29V408c1.94,0.31,2.91,1.45,2.91,3.43v2.36c0,0.84,0.11,1.5,0.34,1.99h-2.48
                c-0.21-0.43-0.31-1.1-0.31-2.01v-2.45c0-0.88-0.26-1.51-0.78-1.88c-0.52-0.37-1.41-0.55-2.65-0.55h-2.39L735.28,415.78
                L735.28,415.78z M735.28,401.9v5.39h2.39c1.16,0,2.02-0.18,2.58-0.55c0.55-0.37,0.83-0.96,0.83-1.77v-0.77
                c0-0.81-0.24-1.4-0.71-1.76c-0.47-0.36-1.25-0.54-2.33-0.54L735.28,401.9L735.28,401.9z'
              />
              <path
                fill='#FFFFFF'
                d='M758.44,415.78h-2.52l-0.95-3.29h-5.83l-0.92,3.29h-2.33l4.57-15.47h3.34L758.44,415.78z M752.03,402.32
                l-2.42,8.62h4.91L752.03,402.32z'
              />
              <path
                fill='#FFFFFF'
                d='M763.31,415.78h-2.46v-15.47h2.46V415.78z'
              />
              <path
                fill='#FFFFFF'
                d='M769.08,415.78h-2.27v-15.47H770l5.89,11.4v-11.4h2.24v15.47h-2.55l-6.5-12.78V415.78z'
              />
              <path
                fill='#FFFFFF'
                d='M791.5,415.78h-9.88v-15.47h9.88v1.59h-7.42v5.13h6.07v1.57h-6.07v5.59h7.42V415.78z'
              />
            </g>
          </g>
        </g>
        <g id='rectG'>
          <path id='rect1' fill='#0056A4' d='M679.5,364h-12v32h12V364z' />
          <path id='rect2' fill='#0056A4' d='M647.5,384v12h20v-12H647.5z' />
          <path id='rect3' fill='#FFDD00' d='M679.5,384h-12v32h12V384z' />
          <path id='rect4' fill='#FFDD00' d='M679.5,384v12h20v-12H679.5z' />
        </g>
      </svg>
    </PreloaderContainer>
  );
};
