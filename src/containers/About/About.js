import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './about.css';

const text = {
  en: {
    p1: 'We are the IDEAL option to get around.',
    p2: 'A teenage passion for exploring the city and emblematic areas of Venezuela became our day-to-day as chauffeurs, sharing with our clients the best of getting around in and out of the city, whether for work or leisure.',
    values: ['COMFORT', 'SAFETY', 'RELIABLE', 'DISCRETION', 'PUNCTUALITY'],
  },
  es: {
    p1: 'Somos la opción IDEAL para transladarte.',
    p2: 'Una pasion de adolescentes por explorar la ciudad y zonas emblematicas de Venezuela se convirtio en nuestro dia a dia como conductorescompartiendo con nuestros clientes lo mejor de moverse dentro y fuera de la ciudad ya sea por razones laborales o personales.',
    values: ['CONFORT', 'SEGURIDAD', 'CONFIANZA', 'DISCRECION', 'PUNTUALIDAD'],
  },
};
function About() {
  const { language } = useContext(LanguageContext);

  return (
    <section id="sobre">
      <div className="aboutImageContainer">
        <img src="images/jeepSeats.jpg" alt="Jeep rear seat" />
      </div>
      <div className="aboutDescription">
        <p>{text[language].p1}</p>
        <br />
        <p>{text[language].p2}</p>
      </div>
      <div className="aboutRodape">
        <ul>
          {text[language].values.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
