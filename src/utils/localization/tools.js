export const defaultLang = "en"
export const getLang = () => window.localStorage.getItem("lang") || defaultLang
export const removeLang = () => window.localStorage.removeItem("lang")

export const changeLang = (value) => {
  window.localStorage.setItem("lang", value)
  window.location.reload()
}

export const getVocabulary = (dictionary, lang, keyPath = "")=> {
  const vocabulary = Object.keys(dictionary).reduce(
    (accumulator, currentKey) => {
      if (currentKey !== "languages") {
        if (typeof dictionary[currentKey] === "object") {
          const nextKeyPath =
            keyPath === "" ? currentKey : keyPath + "." + currentKey
          accumulator[currentKey] = getVocabulary(
            dictionary[currentKey],
            lang,
            nextKeyPath
          )
        } else {
          if (dictionary[lang]) {
            accumulator = dictionary[lang]
          } else {
            console.warn(`No key ${keyPath} in ${lang} vocabulary`)
            accumulator = dictionary[defaultLang]
          }
        }
      }
      return accumulator
    },
    {}
  )

  return vocabulary
}

export const getLanguagesList = (dictionary) => dictionary.languages
