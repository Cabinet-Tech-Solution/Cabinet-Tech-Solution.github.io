import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Services from './Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
     
    </div>
  );
}

export default App;
