import * as dictionary from "./dictionary"
import * as tools from "./tools"
export * from './tools'

export const languages = tools.getLanguagesList(dictionary)

const lang = tools.getLang()
export const vocabulary = tools.getVocabulary(dictionary, lang)

export default vocabulary
