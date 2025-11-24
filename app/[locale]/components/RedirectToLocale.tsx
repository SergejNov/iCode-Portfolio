'use client';

import React from 'react';
import {useRouter} from 'next/navigation';
import {routing} from '@/i18n';
import {useLocale} from 'next-intl';

export default function RedirectToLocale() {
  const router = useRouter();
  const locale = useLocale();

  // This effect runs once on the client to redirect to the locale
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      router.replace(`/${locale}`);
    }
  }, [router, locale]);

  return null;
}
