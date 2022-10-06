import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
