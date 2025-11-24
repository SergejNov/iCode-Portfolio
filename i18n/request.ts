import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import srMessages from '../messages/sr';
import deMessages from '../messages/de';
import enMessages from '../messages/en';

const messages = {
  sr: srMessages,
  de: deMessages,
  en: enMessages
};

export default getRequestConfig(async ({requestLocale}) => {
  // This can be the first time the user requests a page
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: messages[locale as keyof typeof messages]
  };
});
