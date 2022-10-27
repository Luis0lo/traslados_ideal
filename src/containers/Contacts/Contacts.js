import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './contacts.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const text = {
  en: {
    title: 'Contact us',
    p1: ['Fill out the form, contact us by', 'or send us an'],
    p2: 'We will contact you as soon as possible',
    button: 'Submit',
    fName: 'Name',
    fEmail: 'Email',
    fPhone: 'Phone',
    fServiceType: 'Service type',
    fServices: [
      'Around Caracas',
      'Out of Caracas',
      'Airport Transfers',
      'Full day',
      'Other',
    ],
    fComments: 'Comments',
    fDate: 'Date',
    fHour: 'Departure hour',
    fOrigem: 'Departure address',
    fDestine: 'Arrival address',
    fVehicles: 'Vehicles',
  },
  es: {
    title: 'Contactos',
    p1: ['Llene el formulario, contactenos por', 'o envienos un'],
    p2: 'Te contactaremos lo más pronto posible',
    button: 'Enviar',
    fName: 'Nombre',
    fEmail: 'Email',
    fPhone: 'Telefono',
    fServiceType: 'Tipo de Servicio',
    fServices: [
      'Dentro de Caracas',
      'Fuera de Caracas',
      'Aeropuerto',
      'Fullday',
      'Otro',
    ],
    fComments: 'Comentarios',
    fDate: 'Fecha',
    fHour: 'Hora de salida',
    fOrigem: 'Lugar de salida',
    fDestine: 'Lugar de destino',
    fVehicles: 'Vehículos',
  },
};

function Contacts({ vehicle, setVehicle }) {
  const { language } = useContext(LanguageContext);
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

  const handleChange = (e) => {
    if (!vehicle) {
      setVehicle(e.target.value);
    } else if (vehicle === 'Jeep Grand Cherokee') {
      setVehicle('Chevrolet Luv Dmax');
    } else {
      setVehicle('Jeep Grand Cherokee');
    }
  };
  return (
    <section id="contacts">
      <div className="contentContainerContacts">
        <p className="sectionTitle">{text[language].title}</p>
        <br />
        <p className="contactsDescription">
          {text[language].p1[0]}{' '}
          <a
            aria-label="WhatsApp"
            style={{ color: 'black' }}
            href="https://wa.me/584242426636"
            target="_blank"
            rel="noopener noreferrer"
          >
            whatsapp
          </a>{' '}
          {text[language].p1[1]}{' '}
          <a
            aria-label="email"
            style={{ color: 'black' }}
            href="mailto:inv.ideal@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
          <br />
          {text[language].p2}
        </p>
        <form onSubmit={handleOnSubmit}>
          <div className="formContainer">
            <div className="essentialInputs">
              <label htmlFor="name">{text[language].fName}*</label>
              <br />
              <input name="name" type="text" id="name" required />
              <br />
              <label htmlFor="email">{text[language].fEmail}*</label>
              <br />
              <input name="email" type="email" id="email" required />
              <br />
              <label htmlFor="mobile">{text[language].fPhone}*</label>
              <br />
              <input name="number" type="text" id="mobile" required />
              <br />
              <label htmlFor="serviceType">{text[language].fServiceType}</label>
              <br />
              <select name="serviceType" id="serviceType">
                <option value="Traslados dentro de caracas">
                  {text[language].fServices[0]}
                </option>
                <option value="Traslados fuera de caracas">
                  {text[language].fServices[1]}
                </option>
                <option value="traslado para / del aeropuerto">
                  {text[language].fServices[2]}
                </option>
                <option value="fullday"> {text[language].fServices[3]}</option>
                <option value="otro"> {text[language].fServices[4]}</option>
              </select>
              <br />
              <label htmlFor="message"> {text[language].fComments}</label>
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
              <label htmlFor="date">{text[language].fDate}</label>
              <br />
              <input name="date" type="date" id="date" />
              <br />
              <label htmlFor="hour">{text[language].fHour}</label>
              <br />
              <input name="time" type="time" id="hour" />
              <br />
              <label htmlFor="origem">{text[language].fOrigem}</label>
              <br />
              <input name="origem" type="text" id="origem" />
              <br />
              <label htmlFor="destination">{text[language].fDestine}</label>
              <br />
              <input name="destination" type="text" id="destination" />
              <br />
              <fieldset>
                <legend>{text[language].fVehicles}</legend>
                <input
                  onChange={handleChange}
                  checked={vehicle === 'Jeep Grand Cherokee'}
                  value="Jeep Grand Cherokee"
                  type="radio"
                  id="JeepCherokee"
                  name="vehicle"
                />
                <label htmlFor="JeepCherokee">
                  <img src="images/jeepflip.png" alt="Jeep Cherokee" />
                </label>
                <input
                  onChange={handleChange}
                  checked={vehicle === 'Chevrolet Luv Dmax'}
                  value="Chevrolet Luv Dmax"
                  type="radio"
                  id="ChevroletDmax"
                  name="vehicle"
                />
                <label htmlFor="ChevroletDmax">
                  <img src="images/pickup.png" alt="Chevrolet Dmax" />
                </label>
              </fieldset>
            </div>
          </div>
          <button type="submit">{text[language].button}</button>
        </form>
      </div>{' '}
    </section>
  );
}

export default Contacts;
