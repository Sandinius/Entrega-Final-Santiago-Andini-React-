import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cards  from './components/ItemListContainer/ItemListContainer'
import './components/ItemListContainer/ItemListContainer.css'
function App() {
  return (
    <div >
      <Navbar home="Home" contacto="Contacto" carrito="Carrito"/>
      <div className='cartas'>
        <div>
      <Cards title="Hola esta es una card"/>
      </div>
      </div>
    </div>
  );
}

export default App;
