let userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;
const userLanguage = userLocale.split('-')[0];

document.documentElement.setAttribute('lang', userLanguage);
