import './contacts.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contacts() {
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Mensaje Enviada',
        });
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, algo salio mal',
          text: error.text,
        });
        e.target.reset();
      }
    );
  };

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
        <form onSubmit={handleOnSubmit}>
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
                <option value="Traslados dentro de caracas">
                  Dentro de Caracas
                </option>
                <option value="Traslados fuera de caracas">
                  Fuera de Caracas
                </option>
                <option value="traslado para / del aeropuerto">
                  Aeropuerto
                </option>
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
