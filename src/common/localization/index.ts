import * as _tr_TR from './assets/tr_TR.json'
import * as _en_US from './assets/en_US.json'
import { IDictionary } from '@common/types'

const tr_TR: IDictionary<string> = _tr_TR
const en_US: IDictionary<string> = _en_US
const cultures: any = {
  'tr-TR': tr_TR,
  'en-US': en_US,
}

class Localization {
  static localize(phrase: string) {
    const culture = localStorage.getItem('culture') || 'tr-TR'
    return cultures?.[culture]?.[phrase] || ''
  }
}

export { Localization }
