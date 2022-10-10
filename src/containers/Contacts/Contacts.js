import './contacts.css';
function Contacts() {
  return (
    <section id="contacts">
      <div className="contentContainerContacts">
        <p className="sectionTitle">Contactos</p>
        <br />
        <p className="contactsDescription">
          Llene el formulario o envienos un correo electronico directamente
          <br />
          Te contactaremos lo más pronto posible
        </p>
        <form action="">
          <div className="formContainer">
            <div className="essentialInputs">
              <label htmlFor="name">Nombre</label>
              <br />
              <input name="name" type="text" id="name" required />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input name="email" type="email" id="email" required />
              <br />
              <label htmlFor="mobile">Telefono</label>
              <br />
              <input name="number" type="text" id="mobile" required />
              <br />
              <label htmlFor="serviceType">Tipo de Servicio</label>
              <br />
              <select name="serviceType" id="serviceType">
                <option value="cityTransfers">Dentro de Caracas</option>
                <option value="countryTransfers">Fuera de Caracas</option>
                <option value="airportTransfer">Aeropuerto</option>
                <option value="fullday">Fullday</option>
              </select>
              <br />
              <label htmlFor="message">Mensaje</label>
              <br />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="4"
              ></textarea>
              <br />
            </div>
            <div className="nonEssentialInputs">
              <label htmlFor="date">Fecha</label>
              <br />
              <input name="date" type="date" id="date" />
              <br />
              <label htmlFor="hour">Hora de salida</label>
              <br />
              <input name="time" type="time" id="hour" />
              <br />
              <label htmlFor="origem">Lugar de inicio</label>
              <br />
              <input name="origem" type="text" id="origem" />
              <br />
              <label htmlFor="destination">Lugar de destino</label>
              <br />
              <input name="destination" type="text" id="destination" />
              <br />
              <fieldset>
                <legend>Vehicles</legend>
                <input
                  value="Jeep Cherokee"
                  type="radio"
                  id="JeepCherokee"
                  name="vehicle"
                />
                <label htmlFor="JeepCherokee">
                  <img src="images/jeepflip.png" alt="jeep cherokee" />
                </label>
                <input
                  value="Chevrolet Dmax"
                  type="radio"
                  id="ChevroletDmax"
                  name="vehicle"
                />
                <label htmlFor="ChevroletDmax">
                  <img src="images/pickup.png" alt="jeep cherokee" />
                </label>
              </fieldset>
            </div>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>{' '}
    </section>
  );
}

export default Contacts;
