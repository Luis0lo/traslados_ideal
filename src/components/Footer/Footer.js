import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

import './footer.css';

const text = {
  en: {
    language: 'Language',
    designBy: 'Website Develop by',
  },
  es: {
    language: 'Idioma',
    designBy: 'Página web desarrollada por',
  },
};

function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <footer>
      <p>
        {text[language].language} <LanguageSelector />
      </p>
      <p className='designBy'>
        {text[language].designBy}{' '}
        <a
          aria-label="Website Designer"
          style={{ color: 'black' }}
          href="https://withluis.com/#contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Luis
        </a>
      </p>
      <p className='copyright'>&#169; {new Date().getFullYear()} Trasladosideal.com</p>
    </footer>
  );
}

export default Footer;
