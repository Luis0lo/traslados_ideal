import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Contacts from './containers/Contacts/Contacts';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';
import Vehicles from './containers/Vehicles/Vehicles';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Vehicles/>
      <Contacts/>
    </div>
  );
}

export default App;
