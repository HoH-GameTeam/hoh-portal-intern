// @ts-nocheck
import { useTranslation } from 'react-i18next';
// utils
// components
import { useSettingsContext } from '../components/settings';
//
import { allLangs, defaultLang } from './config-lang';

// ----------------------------------------------------------------------

export default function useLocales() {
  const { i18n, t } = useTranslation();

  const { onChangeDirectionByLang } = useSettingsContext();

  const langStorage =
    typeof window !== 'undefined' ? localStorage.getItem('i18nextLng') : '';

  const currentLang =
    allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang: string) => {
    i18n.changeLanguage(newlang);
    onChangeDirectionByLang(newlang);
  };

  const translate: (text: string, options: any) => string = (text, options) =>
    t(text, options);

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text: any, options?: any) => translate(text, options),
    currentLang,
    allLangs,
  };
}
