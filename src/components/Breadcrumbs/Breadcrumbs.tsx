import Link from 'next/link';
import { useRouter } from 'next/router';

import { getLocale } from '@/locales';

import { TEXT_PRESETS } from '../ExtendedText/ExtendedText.types';

import {
  StyledCurrentPath,
  StyledMainContainer,
  StyledPrevPath,
} from './Breadcrumbs.styles';

export const Breadcrumbs: React.FC = () => {
  const router = useRouter();
  const locale = getLocale();

  const formattedPath = router.asPath
    .replace(/^\/+/, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/-/g, ' ');

  const getCurrentPath = () => {
    if (locale === 'en') {
      return formattedPath;
    }
    switch (formattedPath) {
      case 'contact':
        return 'Контакти';

      case 'news':
        return 'Новини';

      case 'help Ukraine':
        return 'Допоможіть Україні';
    }
  };

  return (
    <StyledMainContainer>
      <Link href='/' prefetch={false}>
        <StyledPrevPath preset={TEXT_PRESETS.REG_14}>
          {locale == 'en' ? 'Home   /   ' : 'Головна   /   '}
        </StyledPrevPath>
      </Link>
      <StyledCurrentPath preset={TEXT_PRESETS.REG_14}>
        {getCurrentPath() as string}
      </StyledCurrentPath>
    </StyledMainContainer>
  );
};
