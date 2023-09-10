import { use } from 'i18next';
import i18n, { initReactI18next } from 'react-i18next';
// 현재 폰 언어 확인
import { getLocales } from 'react-native-localize';

import { englishTranslation, koreanTranslation } from './resources';

const localizationResources = {
  ko: { translation: koreanTranslation },
  en: { translation: englishTranslation },
} as const;

if (__DEV__) {
  use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: getLocales()[0].languageCode, // 앱에서 사용할 기본언어 설정
    debug: true,
    resources: localizationResources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false, // XSS 주입을 피하기 위해 설정
    },
  });
} else {
  use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: localizationResources,
    fallbackLng: 'ko',
  });
}

export default i18n;
