import { useRef, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const text = {
    en: {
      about: "ABOUT",
      services: 'SERVICES',
      vehicles: 'FLEET',
      contact: 'CONTACT',
    },
    es: {
      about: "SOBRE",
      services: 'SERVICIOS',
      vehicles: 'FLOTA',
      contact: 'CONTACTOS',
    },
  };

const Navbar = () => {
  const navRef = useRef();
  const { language } = useContext(LanguageContext);
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header className='navbar'>
      {/* <img src="/faviconcolor.png" alt="" /> */}
      <a className='logo' href="#bienvenido" >.IDEAL</a>
      <nav ref={navRef}>
        <a href="#sobre" onClick={showNavbar}>{text[language].about}</a>
        <a href="#services" onClick={showNavbar}>{text[language].services}</a>
        <a href="#vehicles" onClick={showNavbar}>{text[language].vehicles}</a>
        <a href="#contacts" onClick={showNavbar}>{text[language].contact}</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;