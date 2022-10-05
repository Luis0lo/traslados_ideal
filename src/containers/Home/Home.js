import './home.css';

function Home() {
  return (
    <section id="bienvenido">
      <div className="content">
        <div className="slogan">
          <p>No es donde llegas sino como llegas</p>
        </div>
        <div className="mainTitle">
          <h1>Traslados Ejecutivos</h1>
          <p>Dentro de caracas y para toda</p>
          <p>VENEZUELA</p>
        </div>
        <div className="callToAction">
          <a href="#contacts">
            <button>CONTACTOS</button>
          </a>
        </div>
      </div>
      <div className="imageContainer">
        <img src="images/jeep.png" alt="" />
      </div>
    </section>
  );
}

export default Home;
