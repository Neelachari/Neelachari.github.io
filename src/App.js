import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Skills } from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
