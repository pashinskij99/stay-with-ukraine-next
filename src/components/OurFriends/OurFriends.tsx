import { FC, useCallback, useState } from 'react';
import filter from 'lodash/filter';
import map from 'lodash/map';

import useWindowDimensions from '@/hooks/useWindowDimension';
import strings, { getLocale } from '@/locales';
import { GeneralH2 } from '@/styles/general.styles';
import { COLORS } from '@/utils/colors';

import {
  enTags,
  OurFriendsEnCategories,
  OurFriendsUkCategories,
  ukTags,
} from '../../data/OurFriends.data';
import { ExtendedButton } from '../ExtendedButton';

import {
  StyledButtonContainer,
  StyledFriendItem,
  StyledGradientBlock,
  StyledItemsContainer,
  StyledMainContainer,
  StyledTag,
  StyledTagsContainer,
} from './OurFriends.styles';

export const OurFriends: FC = () => {
  const locale = getLocale();
  const { ourFriends } = strings[locale];
  const { width } = useWindowDimensions();
  const screenWidthCheck = !!width && width <= 680;
  const [selectedTag, setSelectedTag] = useState<
    OurFriendsEnCategories | OurFriendsUkCategories
  >(locale === 'en' ? OurFriendsEnCategories.All : OurFriendsUkCategories.All);

  const renderTags = useCallback(() => {
    const tags = locale === 'en' ? enTags : ukTags
    return map(tags, (tag, index) => (
      <StyledTag
        key={`our-friends-${tag}-${index}`}
        onClick={() => setSelectedTag(tag as OurFriendsEnCategories | OurFriendsUkCategories)}
        isSelected={tag as OurFriendsEnCategories | OurFriendsUkCategories === selectedTag}
      >
        {tag as OurFriendsEnCategories | OurFriendsUkCategories}
      </StyledTag>
    ));
  }, [locale, selectedTag]);

  const renderFriendElements = useCallback(() => {
    const categories = locale === 'en' ? OurFriendsEnCategories : OurFriendsUkCategories;
    switch (selectedTag) {
      case categories.All:
        return map(ourFriends.data, (friend, index) => {
          if (screenWidthCheck && index < 10) {
            return (
              <StyledFriendItem
                key={`friend-element-${friend.id}`}
                src={friend.image}
                width={screenWidthCheck ? 154 : 213}
                height={86}
                alt={friend.id}
              />
            );
          }
          if (!screenWidthCheck) {
            return (
              <StyledFriendItem
                key={`friend-element-${friend.id}`}
                src={friend.image}
                width={screenWidthCheck ? 154 : 213}
                height={86}
                alt={friend.id}
              />
            );
          }
        });

      default:
        return filter(ourFriends.data, (friend) =>
        //@ts-ignore
          friend.tags.includes(selectedTag),
        ).map((friend) => (
          <StyledFriendItem
            key={`friend-element-${friend.id}`}
            src={friend.image}
            width={213}
            height={86}
            alt={friend.id}
          />
        ));
    }
  },[locale, ourFriends.data, screenWidthCheck, selectedTag]);

  return (
    <StyledMainContainer>
      <GeneralH2 color={COLORS.WHITE} lang={locale}>{ourFriends.title}</GeneralH2>
      <StyledTagsContainer>{renderTags()}</StyledTagsContainer>
      <StyledItemsContainer>{renderFriendElements()}</StyledItemsContainer>
      <StyledButtonContainer>
        <ExtendedButton preset='primary' title={'See all friends'} />
      </StyledButtonContainer>
      <StyledGradientBlock />
    </StyledMainContainer>
  );
};
