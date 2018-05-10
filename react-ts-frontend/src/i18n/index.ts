import { addLocaleData } from 'react-intl';

import * as enLocaleData from 'react-intl/locale-data/en';
import * as fiLocaleData from 'react-intl/locale-data/fi';
import * as svLocaleData from 'react-intl/locale-data/sv';

import enTranslationMessages from './en';
import fiTranslationMessages from './fi';
import svTranslationMessages from './sv';

import { LocaleEnum } from '../constants/enums';

addLocaleData(enLocaleData);
addLocaleData(fiLocaleData);
addLocaleData(svLocaleData);

const DEFAULT_LOCALE = LocaleEnum.en;

export const appLocales = LocaleEnum;

export const formatTranslationMessages = (locale: string, messages: {}): {} => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  // tslint:disable-next-line:align
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages(LocaleEnum.en.toString(), enTranslationMessages),
  fi: formatTranslationMessages(LocaleEnum.fi.toString(), fiTranslationMessages),
  sv: formatTranslationMessages(LocaleEnum.sv.toString(), svTranslationMessages)
};
