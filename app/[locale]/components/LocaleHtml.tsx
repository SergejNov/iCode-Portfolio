'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';

export default function LocaleHtml() {
  const locale = useLocale();

  useEffect(() => {
    // Update HTML attributes when locale changes
    const html = document.documentElement;
    html.lang = locale;
    html.className = html.className.replace(/dark/g, '') + ' dark';
  }, [locale]);

  return null;
}
