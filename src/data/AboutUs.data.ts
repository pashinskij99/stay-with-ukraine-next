import { IMAGES } from "../../public";

export type AboutUsItemType = {
  author: {
    image: string;
    name: string;
    subName: string;
  },
  text: string
}

export const aboutUsData: ReadonlyArray<AboutUsItemType> = [
  {
    author: {
      image: IMAGES.BBC_NEWS_UKRAINE,
      name: 'BBC News Ukraine',
      subName: 'News of Ukraine and the world',
    },
    text: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    author: {
      image: IMAGES.CNN_INTERNATIONAL,
      name: 'CNN International',
      subName: 'By Kathleen Magramo',
    },
    text: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    author: {
      image: IMAGES.BBC_NEWS_UKRAINE,
      name: 'BBC News Ukraine Second Page',
      subName: 'News of Ukraine and the world',
    },
    text: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    author: {
      image: IMAGES.CNN_INTERNATIONAL,
      name: 'CNN International Second Page',
      subName: 'By Kathleen Magramo',
    },
    text: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    author: {
      image: IMAGES.BBC_NEWS_UKRAINE,
      name: 'BBC News Ukraine Third Page',
      subName: 'News of Ukraine and the world',
    },
    text: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    author: {
      image: IMAGES.CNN_INTERNATIONAL,
      name: 'CNN International Third Page',
      subName: 'By Kathleen Magramo',
    },
    text: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
]