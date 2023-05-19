import { Dispatch, FC, SetStateAction } from 'react';

import strings, { getLocale } from '@/locales';

import { ICONS } from '../../../public/icons';
import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';
import { FilterMenu } from '../FilterMenu';
import {
  HelpUkraineSelectType,
  NewsFilterFormatType,
  NewsFilterProjectType,
  NewsFilterTagType,
  NewsFilterTopicType,
} from '../NewsFilters/NewsFilters.data';

import {
  StyledApplyButtonContainer,
  StyledBurgerMenu,
  StyledContainer,
  StyledFilterButtonsContainer,
  StyledFilterContainer,
  StyledIcon,
  StyledText,
  StyledTitle,
  StyledTransparentBlock,
} from './FiltersMenu.styles';
import { FiltersMenuProps } from './FiltersMenu.types';

export const FiltersMenu: FC<FiltersMenuProps> = ({
  isOpen,
  setIsOpen,
  tag,
  topic,
  project,
  format,
  setTag,
  setTopic,
  setProject,
  setFormat,
}) => {
  const locale = getLocale();
  const { newsFilters } = strings[locale];

  return (
    <>
      <StyledBurgerMenu isOpen={isOpen}>
        <div>
          <StyledContainer>
            <StyledTitle>Filters</StyledTitle>
            <StyledIcon
              alt='cross'
              src={ICONS.BLACK_CROSS}
              onClick={() => setIsOpen(false)}
            />
          </StyledContainer>
          <StyledFilterButtonsContainer>
            <StyledFilterContainer>
              <FilterMenu
                items={newsFilters.topics}
                state={topic}
                setState={
                  setTopic as Dispatch<
                    SetStateAction<
                      | NewsFilterTopicType
                      | NewsFilterTagType
                      | NewsFilterProjectType
                      | NewsFilterFormatType
                      | HelpUkraineSelectType
                    >
                  >
                }
              />
            </StyledFilterContainer>
            <StyledFilterContainer>
              <FilterMenu
                items={newsFilters.projects}
                state={project}
                setState={
                  setProject as Dispatch<
                    SetStateAction<
                      | NewsFilterTopicType
                      | NewsFilterTagType
                      | NewsFilterProjectType
                      | NewsFilterFormatType
                      | HelpUkraineSelectType
                    >
                  >
                }
              />
            </StyledFilterContainer>
            <StyledFilterContainer>
              <FilterMenu
                items={newsFilters.formats}
                state={format}
                setState={
                  setFormat as Dispatch<
                    SetStateAction<
                      | NewsFilterTopicType
                      | NewsFilterTagType
                      | NewsFilterProjectType
                      | NewsFilterFormatType
                      | HelpUkraineSelectType
                    >
                  >
                }
              />
            </StyledFilterContainer>
            <StyledFilterContainer>
              <FilterMenu
                items={newsFilters.tags}
                state={tag}
                setState={
                  setTag as Dispatch<
                    SetStateAction<
                      | NewsFilterTopicType
                      | NewsFilterTagType
                      | NewsFilterProjectType
                      | NewsFilterFormatType
                      | HelpUkraineSelectType
                    >
                  >
                }
              />
            </StyledFilterContainer>
          </StyledFilterButtonsContainer>
          <StyledApplyButtonContainer onClick={() => setIsOpen(false)}>
            <StyledText preset={TEXT_PRESETS.REG_18}>
              {locale === 'en' ? 'Apply' : 'Прийняти'}
            </StyledText>
          </StyledApplyButtonContainer>
        </div>
      </StyledBurgerMenu>
      <StyledTransparentBlock
        isOpen={isOpen}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};
