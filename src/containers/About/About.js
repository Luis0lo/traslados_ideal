import './about.css'

function About() {
  let values = [
    'CONFORTO',
    'SEGURIDAD',
    'CONFIANZA',
    'DISCRECION',
    'PUNTUALIDAD',
  ];
  return (
    <section id="sobre">
      <div className="aboutImageContainer">
        <img src="images/jeepSeats.jpg" alt="Jeep rear seat" />
      </div>
      <div className="aboutDescription">
        <p>Somos la opcion IDEAL para transladarte.</p>
        <p>
          Una passion de adolescentes por explorar la ciudad y zonas
          emblematicas de Venezuela se convirtio en nuestro dia a dia como
          Choferes compartiendo con nuestros clientes lo mejor de moverse dentro
          y fuera de la ciudad ya sea por razones laborales o personales.
        </p>
      </div>
      <div className="aboutRodape">
        <ul>
          {values.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
