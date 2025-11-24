import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const locales = ['sr', 'de', 'en'] as const;
export const defaultLocale = 'sr' as const;

export const {Link, redirect, usePathname, useRouter} = createNavigation({locales});

export const routing = defineRouting({
  locales,
  defaultLocale
});
