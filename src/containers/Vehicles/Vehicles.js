import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './vehicles.css';
import { TiGroup } from 'react-icons/ti';
import { GiSuitcase } from 'react-icons/gi';

const text = {
  en: {
    title: 'Fleet',
    p1: '.IDEAL has different vehicles to meet your transportation needs.',
    maxSeats: ['Max', 'people'],
    maxLuggage: ['Max', 'luggage'],
    vehiclesList: [
      {
        imageUrl: 'images/jeepflip.png',
        model: 'Jeep Grand Cherokee',
        seatType: 'Leather seats',
        color: 'Withe color',
        traction: 'Traction 4x4',
        windows: 'Tinted windows',
        seatsNumber: 4,
        bagage: 4,
      },
      {
        imageUrl: 'images/pickup.png',
        model: 'Chevrolet Luv Dmax',
        seatType: 'Leather seats',
        color: 'Blue color',
        traction: 'Traction 4x4',
        windows: 'Tinted windows',
        seatsNumber: 4,
        bagage: 4,
      },
    ],
    button: 'Select',
  },
  es: {
    title: 'Flota',
    p1: '.IDEAL dispone de diferentes vehículos para satisfacer sus necesidades de transporte.',
    maxSeats: ['Maximo', 'pasajeros'],
    maxLuggage: ['Maximo', 'maletas'],
    vehiclesList: [
      {
        imageUrl: 'images/jeepflip.png',
        model: 'Jeep Grand Cherokee',
        seatType: 'Asientos de cuero',
        color: 'Color Blanco',
        traction: 'Traccion 4x4',
        windows: 'Vidrios ahumados',
        seatsNumber: 4,
        bagage: 4,
      },
      {
        imageUrl: 'images/pickup.png',
        model: 'Chevrolet Luv Dmax',
        seatType: 'Asientos de cuero',
        color: 'Color azul',
        traction: 'Traccion 4x4',
        windows: 'Vidrios ahumados',
        seatsNumber: 4,
        bagage: 4,
      },
    ],
    button: 'Seleccionar',
  },
};

function Vehicles({ setVehicle }) {
  const { language } = useContext(LanguageContext);

  const handleOnClick = (e) => {
    setVehicle(e.target.getAttribute('data-value'));
  };

  return (
    <section id="vehicles">
      <div className="contentContainerVehicles">
        <p className="sectionTitle">{text[language].title}</p>
        <br />
        <p className="flotaDescription">{text[language].p1}</p>
        {text[language].vehiclesList.map((vehicle) => (
          <div key={vehicle.model} className="wrapperVehicules">
            <div className="vehicleImageContainer">
              <img src={vehicle.imageUrl} alt="jeep grand cherokee" />
            </div>
            <div className="characteristicsVehicleContainer">
              <h4>{vehicle.model}</h4>
              <ul>
                <li>✔ {vehicle.color}</li>
                <li>✔ {vehicle.seatType}</li>
                <li>✔ {vehicle.windows}</li>
                <li>✔ {vehicle.traction}</li>
              </ul>

              <div className="mainCaracteristics">
                <div className="seats">
                  {' '}
                  <TiGroup size="55" color="grey" />
                  <p className="passangerNumberP">
                    {text[language].maxSeats[0]} <br /> 4{' '}
                    {text[language].maxSeats[1]}
                  </p>
                </div>
                <div className="luggage">
                  {' '}
                  <GiSuitcase size="55" color="grey" />
                  <p>
                    {text[language].maxLuggage[0]} <br /> 4{' '}
                    {text[language].maxLuggage[1]}
                  </p>
                </div>
              </div>
              <a
                id="selectCarLink"
                href="#contacts"
                data-value={vehicle.model}
                onClick={(e) => handleOnClick(e)}
              >
                {text[language].button}
              </a>
            </div>
          </div>
        ))}
      </div>{' '}
    </section>
  );
}

export default Vehicles;
