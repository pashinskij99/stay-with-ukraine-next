import { ICONS } from '../../../public';
import { LinkType } from '../Header/Header.data';

export type ExternalLink = {
  name: string;
  link: string;
  image: string;
}

export const externalLinks: ReadonlyArray<ExternalLink> = [
  {
    name: 'facebook',
    link: 'https://www.facebook.com/StayWithUa',
    image: ICONS.FACEBOOK
  },
  {
    name: 'twitter',
    link: 'https://twitter.com/StayWithUkrainn',
    image: ICONS.TWITTER
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/stay-with-ukraine/',
    image: ICONS.LINKEDIN
  },
];

export const links: ReadonlyArray<LinkType> = [
  // {
  //   name: 'About us',
  //   path: '/aboutUs',
  //   id: 'aboutUs',
  // },
  // {
  //   name: 'Projects',
  //   path: '/projects',
  //   id: 'projects',
  // },
  {
    name: 'News',
    path: '/news',
    id: 'news',
  },
  // {
  //   name: 'Eternal Glory ',
  //   path: '/externalGlory',
  //   id: 'externalGlory',
  // },
  {
    name: 'Contact',
    path: '/contact',
    id: 'contact',
  },
  {
    name: 'Help Ukraine',
    path: '/help-Ukraine',
    id: 'helpUkraine',
  },
];