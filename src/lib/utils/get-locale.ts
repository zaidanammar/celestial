// Define or import Lang type to ensure consistency
export type Lang = 'en' | 'ko';

// Define supported JSON files and the types of their content
type LocaleFile = 'common' | 'navbar';

// define types for these JSON structures
type CommonLocale = typeof en_common;
type NavbarLocale = typeof en_navbar;

// Define paths for each locale file with template literals for type safety
type LocalePaths = `common.${keyof CommonLocale & string}` | `navbar.${keyof NavbarLocale & string}`;

// Pre-import locale files
import en_common from '@/lib/locales/en/common.json';
import en_navbar from '@/lib/locales/en/navbar.json';
import ko_common from '@/lib/locales/ko/common.json';
import ko_navbar from '@/lib/locales/ko/navbar.json';

// Define locale data with type safety for Lang and LocaleFile types
const localeData: Record<Lang, Record<LocaleFile, object>> = {
  en: {
    common: en_common,
    navbar: en_navbar,
  },
  ko: {
    common: ko_common,
    navbar: ko_navbar,
  },
};

// Translation function with type-safe keyPath
export const getLocale =
  (key: Lang) =>
  (keyPath: LocalePaths): string => {
    const [file, pathParts] = keyPath.split('.') as [LocaleFile, string];

    const localeFileData = localeData[key]?.[file];
    if (!localeFileData) {
      console.warn(`Locale or file "${file}" for key "${key}" is not available.`);
      return keyPath;
    }

    // Traverse the locale data based on path parts
    let result: string | object = localeFileData;

    for (const part of pathParts.split('.')) {
      if (result && typeof result === 'object' && part in result) {
        result = result[part as keyof typeof result];
      } else {
        console.warn(`Translation key "${keyPath}" not found in locale.`);
        return keyPath;
      }
    }

    if (typeof result === 'string') {
      return result;
    } else {
      console.warn(`Translation key "${keyPath}" is not a string. Found type: ${typeof result}`);
      return keyPath;
    }
  };
