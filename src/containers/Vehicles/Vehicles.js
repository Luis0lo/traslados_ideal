import './vehicles.css';
import { TiGroup } from 'react-icons/ti';
import { GiSuitcase } from 'react-icons/gi';

function Vehicles({ setVehicle }) {
  let vehiclesList = [
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
  ];

  const handleOnClick = (e) => {
    setVehicle(e.target.getAttribute('data-value'));
  };

  return (
    <section id="vehicles">
      <div className="contentContainerVehicles">
        <p className="sectionTitle">Flota</p>
        <br />
        <p className="flotaDescription">
          .IDEAL dispone de diferentes vehiculos para satisfacer sus necesidades
          de transporte.
        </p>
        {vehiclesList.map((vehicle) => (
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
                    Maximo <br /> 4 pasajeros
                  </p>
                </div>
                <div className="luggage">
                  {' '}
                  <GiSuitcase size="55" color="grey" />
                  <p>
                    Maximo <br />4 maletas
                  </p>
                </div>
              </div>
              <a
                id="selectCarLink"
                href="#contacts"
                data-value={vehicle.model}
                onClick={(e) => handleOnClick(e)}
              >
                Seleccionar
              </a>
            </div>
          </div>
        ))}
      </div>{' '}
    </section>
  );
}

export default Vehicles;
