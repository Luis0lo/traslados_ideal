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

function App() {
  const [vehicle, setVehicle] = useState('');

  return (
    <div className="App">
      <SocialMedia />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Vehicles setVehicle={setVehicle} />
      <Explore />
      <Contacts vehicle={vehicle} setVehicle={setVehicle} />
    </div>
  );
}

export default App;
