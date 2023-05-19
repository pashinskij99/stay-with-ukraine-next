import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { getLocale } from '@/locales';

import { ICONS } from '../../../public/icons';
import {
  HelpUkraineSelectType,
  NewsFilterFormatType,
  NewsFilterProjectType,
  NewsFilterTagType,
  NewsFilterTopicType,
} from '../NewsFilters/NewsFilters.data';

import {
  StyledDropdownMenu,
  StyledFilterButton,
  StyledFilterContainer,
  StyledFilterText,
  StyledIcon,
  StyledMenuItem,
} from './FilterMenu.styles';
import { FilterMenuType } from './FilterMenu.types';

export const FilterMenu: FC<FilterMenuType> = ({
  items,
  state,
  setState,
  isCapitalize,
  isInNews,
}) => {
  const locale = getLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !(
          event.target instanceof Node &&
          containerRef.current.contains(event.target)
        )
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  const handleMenuItemClick = (
    item:
      | NewsFilterTopicType
      | NewsFilterTagType
      | NewsFilterProjectType
      | NewsFilterFormatType
      | HelpUkraineSelectType,
  ) => {
    setIsOpen(false);
    setState(item);
  };

  const numItems = items.length;
  const buttonHeight = isOpen ? `${40 + numItems * 30}px` : '40px';

  const getItemsText = useCallback(
    (
      item:
        | NewsFilterTopicType
        | NewsFilterTagType
        | NewsFilterProjectType
        | NewsFilterFormatType
        | HelpUkraineSelectType,
    ) => {
      switch (locale) {
        case 'en':
          if (
            item.valueEn === '--Select topic--' ||
            item.valueEn === '--Select project--' ||
            item.valueEn === '--Select format--'
          ) {
            return 'All';
          } else return item.valueEn;

        case 'uk':
          if (
            item.valueUk === '--Обрати топік--' ||
            item.valueUk === '--Обрати проект--' ||
            item.valueUk === '--Обрати формат--'
          ) {
            return 'Всі';
          } else return item.valueUk;
      }
    },
    [locale],
  );

  return (
    <StyledFilterContainer ref={containerRef}>
      <StyledFilterButton
        isInNews={isInNews}
        currentheight={buttonHeight}
        onClick={() => setIsOpen(!isOpen)}
      >
        <StyledFilterText
          isInNews={isInNews}
          isFirstElement={state === items[0]}
          isCapitalize={isCapitalize}
        >
          {locale === 'en' ? state.valueEn : state.valueUk}
        </StyledFilterText>
        <StyledIcon
          width={12}
          height={12}
          alt='arrow'
          src={ICONS.ARROW_DOWN_2}
          currentheight={buttonHeight}
        />
      </StyledFilterButton>
      {isOpen && (
          <StyledDropdownMenu currentheight={buttonHeight} isInNews={isInNews}>
            {items.map((item) => (
              <StyledMenuItem
                isInNews={isInNews}
                isselected={state === item}
                isCapitalize={isCapitalize}
                key={
                  locale === 'en'
                    ? `select-item-${item.valueEn}`
                    : `select-item-${item.valueUk}`
                }
                onClick={() => handleMenuItemClick(item)}
              >
                {getItemsText(item)}
              </StyledMenuItem>
            ))}
          </StyledDropdownMenu>
      )}
    </StyledFilterContainer>
  );
};
