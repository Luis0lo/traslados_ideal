import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Home from './containers/Home/Home';
import Services from './containers/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
