import { OurFriendsEnCategories, OurFriendsUkCategories } from '@/data';

export type FriendType = {
  id: string;
  image: string;
  tags: OurFriendsEnCategories[] | OurFriendsUkCategories[];
};
