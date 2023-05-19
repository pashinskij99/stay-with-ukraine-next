import { FC, useCallback, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import filter from 'lodash/filter';
import map from 'lodash/map';

import strings, { getLocale } from '@/locales';
import { GeneralH2 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

import { ICONS } from '../../../public/icons';
import { SampleArrow } from '../SampleArrow';
import { TheyAreWithUsItem } from '../TheyAreWithUsItem';

import {
  enTags,
  locationEnTags,
  locationUkTags,
  ukTags,
} from './TheyAreWithUs.data';
import {
  StyledItemsContainer,
  StyledLocationTagContainer,
  StyledLocationTagsContainer,
  StyledLocationTagText,
  StyledMainContainer,
  StyledTagContainer,
  StyledTagsContainer,
  StyledTagText,
} from './TheyAreWithUs.styles';
import {
  TheyAreWithUsEnTags,
  TheyAreWithUsLocationEnTags,
  TheyAreWithUsLocationUkTags,
  TheyAreWithUsUkTags,
} from './TheyAreWithUs.types';

export const TheyAreWithUs: FC = () => {
  const locale = getLocale();
  const { theyAreWithUs } = strings[locale];
  const [activeTag, setActiveTag] = useState<
    TheyAreWithUsEnTags | TheyAreWithUsUkTags
  >(locale === 'en' ? TheyAreWithUsEnTags.All : TheyAreWithUsUkTags.All);
  const [activeLocationTag, setActiveLocationTag] = useState<
    TheyAreWithUsLocationEnTags | TheyAreWithUsLocationUkTags
  >(
    locale === 'en'
      ? TheyAreWithUsLocationEnTags.All
      : TheyAreWithUsLocationUkTags.All,
  );
  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: true,
    nextArrow: <SampleArrow icon={ICONS.ARROW_LEFT_LIGHT_SVG} isLeft={false} />,
    prevArrow: <SampleArrow icon={ICONS.ARROW_LEFT_LIGHT_SVG} isLeft={true} />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const setActiveTagValue = useCallback(
    (tag: TheyAreWithUsEnTags | TheyAreWithUsUkTags) => {
      if (activeTag && tag === activeTag)
        setActiveTag(
          locale === 'en' ? TheyAreWithUsEnTags.All : TheyAreWithUsUkTags.All,
        );
      setActiveTag(tag);
    },
    [activeTag, locale],
  );

  const setActiveLocationTagValue = useCallback(
    (
      locationTag: TheyAreWithUsLocationEnTags | TheyAreWithUsLocationUkTags,
    ) => {
      if (activeLocationTag && locationTag === activeLocationTag)
        setActiveLocationTag(
          locale === 'en'
            ? TheyAreWithUsLocationEnTags.All
            : TheyAreWithUsLocationUkTags.All,
        );
      setActiveLocationTag(locationTag);
    },
    [activeLocationTag, locale],
  );

  const renderTags = useCallback(() => {
    const tags = locale === 'en' ? enTags : ukTags;
    return map(tags, (tag) => (
      <StyledTagContainer
        isSelected={tag === activeTag}
        key={`they-are-with-us-tag-${tag}`}
        onClick={() =>
          setActiveTagValue(tag as TheyAreWithUsEnTags | TheyAreWithUsUkTags)
        }
      >
        <StyledTagText isSelected={tag === activeTag}>
          {tag as TheyAreWithUsEnTags | TheyAreWithUsUkTags}
        </StyledTagText>
      </StyledTagContainer>
    ));
  }, [activeTag, locale, setActiveTagValue]);

  const renderLocationTags = useCallback(() => {
    const locationTags = locale === 'en' ? locationEnTags : locationUkTags;
    return map(locationTags, (locationTag) => (
      <StyledLocationTagContainer
        isSelected={locationTag === activeLocationTag}
        key={`they-are-with-us-location-tag-${locationTag}`}
        onClick={() =>
          setActiveLocationTagValue(
            locationTag as
              | TheyAreWithUsLocationEnTags
              | TheyAreWithUsLocationUkTags,
          )
        }
      >
        <StyledLocationTagText isSelected={locationTag === activeLocationTag}>
          {
            locationTag as
              | TheyAreWithUsLocationEnTags
              | TheyAreWithUsLocationUkTags
          }
        </StyledLocationTagText>
      </StyledLocationTagContainer>
    ));
  }, [activeLocationTag, locale, setActiveLocationTagValue]);

  const renderPersons = () => {
    const tags = locale === 'en' ? TheyAreWithUsEnTags : TheyAreWithUsUkTags;
    const locationTags =
      locale === 'en'
        ? TheyAreWithUsLocationEnTags
        : TheyAreWithUsLocationUkTags;
    if (activeTag === tags.All && activeLocationTag === locationTags.All) {
      return map(theyAreWithUs.data, (item) => (
        <TheyAreWithUsItem
          key={`they-are-with-us-${item.person.name}-${item.person.occupation}`}
          data={item.person}
        />
      ));
    }
    if (activeTag === tags.All) {
      return filter(theyAreWithUs.data, (item) =>
        //@ts-ignore
        item.locationTags.includes(activeLocationTag),
      ).map((item) => (
        <TheyAreWithUsItem
          key={`they-are-with-us-${item.person.name}-${item.person.occupation}`}
          data={item.person}
        />
      ));
    }
    if (activeLocationTag === locationTags.All) {
      return filter(theyAreWithUs.data, (item) =>
        //@ts-ignore
        item.tags.includes(activeTag),
      ).map((item) => (
        <TheyAreWithUsItem
          key={`they-are-with-us-${item.person.name}-${item.person.occupation}`}
          data={item.person}
        />
      ));
    }
    return filter(
      theyAreWithUs.data,
      (item) =>
        //@ts-ignore
        item.tags.includes(activeTag) &&
        //@ts-ignore
        item.locationTags.includes(activeLocationTag),
    ).map((item) => (
      <TheyAreWithUsItem
        key={`they-are-with-us-${item.person.name}-${item.person.occupation}`}
        data={item.person}
      />
    ));
  };

  return (
    <StyledMainContainer>
      <GeneralH2 color={COLORS.WHITE} lang={locale}>
        {theyAreWithUs.title}
      </GeneralH2>
      <StyledTagsContainer>
        {renderTags()}
      </StyledTagsContainer>
      <StyledLocationTagsContainer>
        {renderLocationTags()}
      </StyledLocationTagsContainer>
      <StyledItemsContainer>
        <Slider {...settings}>
          {renderPersons()}
        </Slider>
        {/* {renderPersons()} */}
      </StyledItemsContainer>
    </StyledMainContainer>
  );
};
