import { defineStore, acceptHMRUpdate } from 'pinia'
import { useStorage } from '@vueuse/core'
import { LOCAL_STORAGE_KEY } from 'src/util'
import { Ref, computed, ref } from 'vue'
import { bookNamings, translations } from 'src/logic/data'
import { CopyTemplateData, FormatTemplateData, LanguageSymbol, PassageListLayout, ScreenMode, TranslationKey, SettingsPersistType } from 'src/types'

type SettingsPersistType = {
  [key: string]: unknown;
  version: string;
  appearance: {
    defaultLang: LanguageSymbol;
    fontSize: number;
    screenMode: ScreenMode;
    primaryColor: string;
  };
  languages: Record<LanguageSymbol, {
    appBookNaming: string;
    bookNamings: Array<{ lang: string; name: string; books: string[] }>;
    selectedTranslations: string[];
  }>;
  formatTemplates: FormatTemplateData[];
  copyTemplates: CopyTemplateData[];
  appFormatTemplate: string;
  defaultCopyTemplate: string;
  defaultSearchResultLayout: PassageListLayout;
  defaultTranslation: TranslationKey;
};

const initialPersistValue: SettingsPersistType = {
  version: '1',
  appearance: {
    defaultLang: navigator.language as LanguageSymbol,
    fontSize: 16,
    screenMode: 'dark' as ScreenMode,
    primaryColor: '', // Default depends on screen mode
  },
  languages: {
    en: {
      appBookNaming: 'SBL abbreviations',
      bookNamings: bookNamings.filter(it => it.lang === 'en'),
      selectedTranslations: ['NIV', 'NLT'],
    },
    pl: {
      appBookNaming: 'Moje pl',
      bookNamings: bookNamings.filter(it => it.lang === 'pl'),
      selectedTranslations: ['EIB', 'BT5', 'BW', 'UBG'],
    },
  },
  formatTemplates: [
    {
      name: 'App format',
      referencePosition: 'before',
      referenceLine: 'same line',
      translationAbbreviation: 'none',
      numbers: false,
      verseNewLine: false,
      separatorChar: ':',
      rangeChar: '-',
      referenceCharsBefore: '',
      referenceCharsAfter: '',
      quoteCharsBefore: '',
      quoteCharsAfter: '',
      verseNumberCharsBefore: '',
      verseNumberCharsAfter: '',
      translationAbbreviationCharsBefore: '',
      translationAbbreviationCharsAfter: '',
    } as FormatTemplateData,
    {
      name: 'English presentation',
      referencePosition: 'after',
      referenceLine: 'new line',
      translationAbbreviation: 'uppercase',
      numbers: false,
      verseNewLine: false,
      separatorChar: ':',
      rangeChar: '-',
      referenceCharsBefore: '',
      referenceCharsAfter: '',
      quoteCharsBefore: '',
      quoteCharsAfter: '',
      verseNumberCharsBefore: '',
      verseNumberCharsAfter: '',
      translationAbbreviationCharsBefore: '',
      translationAbbreviationCharsAfter: '',
    } as FormatTemplateData,
    {
      name: 'Polska prezentacja',
      referencePosition: 'after',
      referenceLine: 'new line',
      translationAbbreviation: 'uppercase',
      numbers: false,
      verseNewLine: false,
      separatorChar: ',',
      rangeChar: '-',
      referenceCharsBefore: '',
      referenceCharsAfter: '',
      quoteCharsBefore: '',
      quoteCharsAfter: '',
      verseNumberCharsBefore: '',
      verseNumberCharsAfter: '',
      translationAbbreviationCharsBefore: '',
      translationAbbreviationCharsAfter: '',
    } as FormatTemplateData,
    {
      name: 'Studium',
      referencePosition: 'before',
      referenceLine: 'new line',
      translationAbbreviation: 'uppercase',
      numbers: true,
      verseNewLine: false,
      separatorChar: ':',
      rangeChar: '-',
      referenceCharsBefore: '– ',
      referenceCharsAfter: '',
      quoteCharsBefore: '',
      quoteCharsAfter: '',
      verseNumberCharsBefore: '(',
      verseNumberCharsAfter: ')',
      translationAbbreviationCharsBefore: '',
      translationAbbreviationCharsAfter: ''
    } as FormatTemplateData,
  ] as FormatTemplateData[],
  copyTemplates: [
    {
      name: 'Prezentacja',
      lang: {
        en: {
          formatTemplate: 'English presentation',
          bookNaming: 'Standard'
        },
        pl: {
          formatTemplate: 'Polska prezentacja',
          bookNaming: 'EIB skrócone'
        }
      }
    },
    {
      name: 'Studium',
      lang: {
        en: {
          formatTemplate: 'Studium',
          bookNaming: 'SBL abbreviations'
        },
        pl: {
          formatTemplate: 'Studium',
          bookNaming: 'Moje pl'
        }
      }
    }
  ] as CopyTemplateData[],
  appFormatTemplate: 'App format',
  defaultCopyTemplate: 'Studium',
  defaultSearchResultLayout: 'split' as PassageListLayout,
  defaultTranslation: { lang: 'pl', symbol: 'UBG' } as TranslationKey
}

export const useSettingsStore = defineStore('settings', () => {
  const persist = useStorage(LOCAL_STORAGE_KEY + '.settings', initialPersistValue)

  const lang: Ref<LanguageSymbol> = ref(persist.value.appearance.defaultLang)
  const language = computed(() => persist.value.languages[lang.value])
  const appBookNames = computed(() => language.value.bookNamings.find(it => it.name === language.value.appBookNaming)?.books || [])
  const appFormatTemplate = computed(() => persist.value.formatTemplates.find(it => it.name === persist.value.appFormatTemplate))

  // Computed

  /** List of book namings for the currently selected lang in langDefaults */
  const bookNamingList = computed(() => bookNamings
    .filter(_ => _.lang === lang.value)
    .map(_ => ({ ..._, booksText: _.books.join(', ') }))
    .sort((a, b) => a.name.localeCompare(b.name, lang.value, { sensitivity: 'base', ignorePunctuation: true })))


  const localeTranslations = computed(() => translations.filter(it => it.lang === lang.value).map(it => it.symbol).sort())

  function nameSorter(a: { name: string }, b: { name: string }) {
    return a.name.localeCompare(b.name, lang.value, { sensitivity: 'base', ignorePunctuation: true })
  }

  function reset() {
    for (const key in initialPersistValue) {
      persist.value[key] = initialPersistValue[key]
    }
  }

  return { appBookNames, appFormatTemplate, bookNamingList, lang, localeTranslations, nameSorter, persist, reset }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSettingsStore, import.meta.hot))
}
