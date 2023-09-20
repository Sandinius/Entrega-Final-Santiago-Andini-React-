import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import "./components/Cards/Cards.css";

function App() {
  return (
    <div >
      <Navbar home="Home" contacto="Contacto" carrito="Carrito"/>
      <div className='cartas'>
      <Cards title="Jorge" description="Es un estudiante profesional" image="https://www.gatodumas.com.ar/images/experiencia_alumnos/fotito-gomez.jpg" alt="Jorge"/>
      <Cards title="Carlos" description="Hace su mejor esfuerso" image="https://www.gatodumas.com.ar/images/experiencia_alumnos/280x280%20liporace.jpg" alt="Carlos"/>
      <Cards title="Raul" description="No le esta poniendo ganas" image="https://www.gatodumas.com.ar/images/experiencia_alumnos/280x280%20gerboles.jpg" alt="Raul"/>
      </div>
    </div>
  );
}

export default App;
