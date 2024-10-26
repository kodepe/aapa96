"use client";
import { lang_en } from "@/constants/en";
import { lang_es } from "@/constants/es";
import { createContext, useContext, useState } from "react";

type LANG = "lang_es" | "lang_en";
type LANG_DATA = typeof lang_es | typeof lang_en;

interface ContextProps {
  lang: LANG;
  changeLanguage: (value: LANG) => LANG;
  data: LANG_DATA;
}

const defaultContext: ContextProps = {
  lang: "lang_es",
  changeLanguage: (value: LANG) => {
    return value;
  },
  data: lang_es,
};

export const LanguageContext = createContext<ContextProps>(defaultContext);

export const LanguageProvider = ({
  children,
}: {
  children?: React.ReactNode | undefined;
}) => {
  const [data, setData] = useState<LANG_DATA>(lang_es);
  const [lang, setLang] = useState<LANG>("lang_es");
  const changeLanguage = (value: LANG) => {
    const options = {
      lang_en,
      lang_es,
    };
    setLang(value);
    setData(options[value]);
    return value;
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const UseLangaugeContext = () => useContext(LanguageContext);
