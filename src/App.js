import logo from './logo.svg';
import './App.css';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Team from './Team';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <Projects />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
