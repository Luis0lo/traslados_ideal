import './languageSelector.css';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const text = {
  en: {
    english: 'English',
    spanish: 'Spanish',
  },
  es: {
    english: 'Inglés',
    spanish: 'Español',
  },
};

function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="languageSelectorContainer">
      <button
        className="es"
        onClick={() => setLanguage('es')}
        disabled={language === 'es'}
      >
        <p>{text[language].spanish}</p>
      </button>
      <button
        className="en"
        onClick={() => setLanguage('en')}
        disabled={language === 'en'}
      >
        <p>{text[language].english}</p>
      </button>
    </div>
  );
}

export default LanguageSelector;
