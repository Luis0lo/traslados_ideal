import './home.css';
import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const text = {
    en: {
      slogan: "IT'S NOT WHERE YOU GET BUT HOW YOU GET THERE",
      title: 'Executive Transfers',
      where: 'WHITIN CARACAS AND FOR ALL OF',
      country: 'VENEZUELA',
      button: 'CONTACT US',
    },
    es: {
      slogan: 'No es donde llegas sino como llegas',
      title: 'Traslados Ejecutivos',
      where: 'DENTRO DE CARACAS Y PARA TODA',
      country: 'VENEZUELA',
      cutton: 'CONTACTOS',
    },
  };

function Home() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="bienvenido">
      <div className="content">
        <div className="slogan">
          <p>{text[language].slogan}</p>
        </div>
        <div className="mainTitle">
          <h1>{text[language].title}</h1>
          <p>{text[language].where}</p>
          <p>{text[language].country}</p>
        </div>
        <div className="callToAction">
          <a href="#contacts">
            <button>{text[language].button}</button>
          </a>
        </div>
      </div>
      <div className="imageContainer">
        <img src="images/jeep.png" alt="jeep grand cherokee" />
      </div>
    </section>
  );
}

export default Home;
