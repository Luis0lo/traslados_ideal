import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SocialMedia from './components/SocialMedia/SocialMedia';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Explore from './containers/Explore/Explore';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';
import Vehicles from './containers/Vehicles/Vehicles';
import { LanguageContext } from './context/LanguageContext';

function App() {
  const [vehicle, setVehicle] = useState('');

  let userLocale =
    navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language;
  const userLanguage = userLocale.split('-')[0];
  
  const [language, setLanguage] = useState(
    userLanguage === 'es' || userLanguage === 'en' ? userLanguage : 'en'
  );

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <SocialMedia />
        <Navbar />
        <Home />
        <About />
        <Services />
        <Vehicles setVehicle={setVehicle} />
        <Explore />
        <Contacts vehicle={vehicle} setVehicle={setVehicle} />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
