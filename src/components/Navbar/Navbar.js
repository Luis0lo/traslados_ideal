import { useRef } from 'react';
import './navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header className='navbar'>
      {/* <img src="/faviconcolor.png" alt="" /> */}
      <a className='logo' href="#bienvenido" >.IDEAL</a>
      <nav ref={navRef}>
        <a href="#sobre" onClick={showNavbar}>Sobre</a>
        <a href="#services" onClick={showNavbar}>Servicios</a>
        <a href="#vehicles" onClick={showNavbar}>Flota</a>
        <a href="#contacts" onClick={showNavbar}>Contactos</a>
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