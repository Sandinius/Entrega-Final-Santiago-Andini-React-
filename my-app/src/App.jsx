import './App.css';
import Navbar from './components/Navbar/Navbar';
import './components/ItemListContainer/ItemListContainer.css';
import Home from './components/Pages/Home';
import Comida from './components/Pages/Comida';
import Bebidas from './components/Pages/Bebidas';
import Juguetes from './components/Pages/Juguetes';
import InformacionProductos from './components/Pages/Detalles';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Carrito from './components/Pages/Carrito';
import {React, useState, useEffect} from 'react';
import swal from 'sweetalert';

function App() {
  
  const initialCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const [carrito, setCarrito] = useState(initialCarrito);
  const actualizarCarrito = (nuevoCarrito) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };
  const actualizarCarritoLocalStorage = (nuevoCarrito) => {

    setCarrito(nuevoCarrito);

    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const agregarAlCarrito = (producto, contador) => {
    const cantidad = contador;
    const precioTotal = producto.price * cantidad;
    const productoEnCarrito = {
      name: producto.name,
      price: precioTotal,
      cantidad: cantidad
    };
    const productoExistenteIndex = carrito.findIndex((item) => item.name === producto.name);

    if (productoExistenteIndex !== -1) {
      const carritoActualizado = [...carrito];
      carritoActualizado[productoExistenteIndex].cantidad = cantidad;
      carritoActualizado[productoExistenteIndex].price = precioTotal;
      swal({
        text:"Producto actualizado en el carrito Correctamente",
        icon:"success",
      }); 
      actualizarCarritoLocalStorage(carritoActualizado);
    } else {
      const nuevoCarrito = [...carrito, productoEnCarrito];
      swal({
        text:"Producto agregado al carrito Correctamente",
        icon:"success",
      });
      actualizarCarritoLocalStorage(nuevoCarrito);
    }
  };

  useEffect(() => {

    actualizarCarritoLocalStorage(carrito);
  }, [carrito]);

  return (
    
    <Router>
      
    <div>
    <Navbar home="Home" comida="Comidas" bebida="Bebidas" juguetes="Juguetes" carrito={carrito} />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Comidas' element={<Comida />}/>
        <Route path='/Bebidas' element={<Bebidas />}/>
        <Route path='/Juguetes' element={<Juguetes />}/>
        <Route path='/Carrito' element={<Carrito carrito={carrito} actualizarCarrito={actualizarCarrito}/>}/>
        <Route path='/:category/:id' element={<InformacionProductos agregarAlCarrito={agregarAlCarrito} carrito={carrito} />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
