import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './services.css';

const text = {
  en: {
    title: 'Services',
    p1Description:
      'We are not just drivers, the services are tailored to the client because we understand that each one has different needs.',
    p2Description:
      'You can hire us by transfer, event or per day if you require it.',
    p3Description:
      'Because we know the best routes and times to travel, we are available to help you plan your trips.',
    p1Services: 'MOST REQUESTED',
    services: [
      'Business trip',
      'Airport Transfers',
      'Congresses/Conferences',
      'Malls',
      'Events',
      'Full day',
    ],
    button: 'CONTACT US',
  },
  es: {
    title: 'Servicios',
    p1Description:
      'Porque no somos solo conductores, los servicios son hechos a lamedida del cliente porque entendemos que cada uno tiene diferente necesidades.',
    p2Description:
      'Puede contratarnos por traslado, evento o por dia si asi lo    requiere.',
    p3Description:
      'Porque conocemos las mejores rutas y horas para trasladarse, estamos disponibles para ayudarlo a planificar sus viajes.',
    p1Services: 'MAS SOLICITADOS',
    services: [
      'Viajes de Negocios',
      'Traslados Aeropuerto',
      'Congresos/Conferencias',
      'Centro Comerciales',
      'Eventos',
      'Fullday',
    ],
    button: 'CONTACTOS',
  },
};

function Services() {
  const { language } = useContext(LanguageContext);

  let locations = ['CARACAS', 'VALENCIA', 'MARACAY', 'LA GUAIRA', 'LOS TEQUES'];

  return (
    <section id="services">
      <div className="contentContainerServices">
        <p className="sectionTitle">{text[language].title}</p>
        <div className="wrapper">
          <div className="servicesDescription">
            <p>{text[language].p1Description}</p>
            <br />
            <p>{text[language].p2Description}</p>
            <br />
            <p>{text[language].p3Description}</p>
            <a href="#contacts" id="callToActionAnchor">
              {text[language].button}
            </a>
          </div>
          <div className="servicesList">
            <div className="card">
              <p> {text[language].p1Services}</p>
              <ul>
                {text[language].services.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="servicesRodape">
        <ul>
          {locations.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
