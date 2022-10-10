import './services.css';

function Services() {
  let locations = ['CARACAS', 'VALENCIA', 'MARACAY', 'LA GUAIRA', 'LOS TEQUES'];
  let services = [
    'Viajes de Negocios',
    'Traslados al/del Aeropuerto',
    'Congresos/Conferencias',
    'Centro Comerciales',
    'Eventos',
    'Fullday',
  ];

  return (
    <section id="services">
      <div className="contentContainerServices">
        <p className="sectionTitle">Servicios</p>
        <div className="wrapper">
          <div className="servicesDescription">
            <p>
              Porque no somos solo conductores, los servicios son hechos a la
              medida del cliente porque entendemos que cada cliente tiene
              diferente necesidades.
            </p>
            <br />
            <p>
              Puede contratarnos por traslado, evento o por dia si asi lo
              requiere.
            </p>
            <br />
            <p>
              Porque conocemos las mejores rutas y horas para trasladarse,
              estamos disponibles para ayudarlo a planificar sus viajes.{' '}
            </p>
            <button>CONTACTOS</button>
          </div>
          <div className="servicesList">
            <div className="card">
              <p>MAS SOLICITADOS</p>
              <ul>
                {services.map((el) => (
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
