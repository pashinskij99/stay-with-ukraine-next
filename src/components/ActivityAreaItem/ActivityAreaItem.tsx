import { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

import { useAppDispatch } from '@/hooks/redux';
import useWindowDimensions from '@/hooks/useWindowDimension';
import { newsSlice } from '@/redux/slices/newsSlice';

import { ICONS } from '../../../public/icons';
import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';

import {
  StyledActivityAreaImage,
  StyledActivityAreaItemContainer,
  StyledActivityAreaText,
  StyledActivityAreaTextContainer,
  StyledActivityAreaTitle,
  StyledArrowContainer,
  StyledArrowIcon,
  StyledImageContainer,
  StyledTextWrapper,
} from './ActivityAreaItem.styles';
import { ActivityAreaItemProps } from './ActivityAreaItem.types';

export const ActivityAreaItem: React.FC<ActivityAreaItemProps> = ({
  data,
  isLastIndex,
}) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const textRefContainer = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [refsLoaded, setRefsLoaded] = useState(false);
  const { width } = useWindowDimensions();

  useLayoutEffect(() => {
    setTimeout(() => {
      if (textRefContainer.current !== null && textRef.current !== null) {
        setRefsLoaded(true);
      }
    }, 100);
  }, [textRefContainer, textRef, data.text, width]);

  const isRenderArrow = useMemo(() => {
    if (refsLoaded && textRefContainer.current && textRef.current) {
      const textContainerHeight = textRefContainer.current.offsetHeight;
      const textRefHeight = textRef.current.offsetHeight;
      if (
        textRefHeight &&
        textContainerHeight &&
        textRefHeight > textContainerHeight
      ) {
        return true;
      }
    }
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.title, refsLoaded, width]);

  const renderArrow = useCallback(() => {
    if (isRenderArrow) {
      return (
        <StyledArrowIcon
          alt='arrow button'
          src={ICONS.ARROW_DOWN_2}
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
          width={14}
          height={14}
        />
      );
    }
  }, [isOpen, isRenderArrow]);

  const onImageClick = () => {
    dispatch(newsSlice.actions.setTopic({ topic: data.topic }));
  };

  return (
    <StyledActivityAreaItemContainer isLastIndex={isLastIndex} isOpen={isOpen}>
      <StyledImageContainer>
        <Link href='/news' onClick={() => onImageClick()}>
          <StyledActivityAreaImage
            onClick={() => onImageClick()}
            alt={data.alt}
            src={data.image}
          />
        </Link>
      </StyledImageContainer>
      <StyledActivityAreaTextContainer>
        <StyledActivityAreaTitle preset={TEXT_PRESETS.REG_33}>
          {data.title}
        </StyledActivityAreaTitle>
        <div ref={textRefContainer}>
          <StyledActivityAreaText preset={TEXT_PRESETS.REG_30} isOpen={isOpen}>
            <StyledTextWrapper ref={textRef}>{data.text}</StyledTextWrapper>
          </StyledActivityAreaText>
        </div>
      </StyledActivityAreaTextContainer>
      <StyledArrowContainer>{renderArrow()}</StyledArrowContainer>
    </StyledActivityAreaItemContainer>
  );
};
