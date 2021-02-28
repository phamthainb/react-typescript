import React, { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { selectAppStore } from './store/selecters';
// json
import vi from '@assets/languages/vi.json';
import en from '@assets/languages/en.json';
import useCountRenders from '@hooks/useCountRenders';

const translatesJson = {
  vi: vi,
  en: en,
};

interface Props {
  children: JSX.Element;
}

export default function LanguageProvider({ children }: Props): ReactElement {
  const { lang } = useSelector(selectAppStore);
  
  useCountRenders('LanguageProvider');
  
  return (
    <IntlProvider
      locale={lang}
      messages={translatesJson[lang]}
      defaultLocale={'vi'}
    >
      {children}
    </IntlProvider>
  );
}

export { translatesJson };
