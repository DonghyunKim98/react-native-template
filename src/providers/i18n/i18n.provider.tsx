import { PropsWithChildren } from 'react';
import { I18nextProvider } from 'react-i18next';

type I18nProviderProps = PropsWithChildren & {};

export const I18nProvider = ({ children }: I18nProviderProps) => {
  return <I18nextProvider>{children}</I18nextProvider>;
};
