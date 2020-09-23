import React, { ReactElement } from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { selectAppStore } from "./store/selecters";
// json
import vi from "@assets/languages/vi.json";
import en from "@assets/languages/en.json";

const translates = {
  vi: vi,
  en: en,
};

interface Props {
  children: JSX.Element;
}

export default function LanguageProvider({ children }: Props): ReactElement {
  const { lang } = useSelector(selectAppStore);
  return (
    <IntlProvider
      locale={lang}
      messages={translates[lang]}
      defaultLocale={"vi"}
    >
      {children}
    </IntlProvider>
  );
}
