let userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;
let userLanguage = userLocale.split('-')[0];

if (userLanguage !== 'es' || userLanguage !== 'en') {
  document.documentElement.setAttribute('lang', 'en');
} else {
  document.documentElement.setAttribute('lang', userLanguage);
}
