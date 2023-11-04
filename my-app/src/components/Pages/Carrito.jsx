import swal from 'sweetalert';
import { useEffect, useState } from 'react';
import './Carrito.css';
import ConfirmarCompra from '../ConfirmarCompra/ConfirmarCompra';
import ReactDOM from 'react-dom'; // Importa ReactDOM

const Carrito = ({ carrito, actualizarCarrito }) => {
  const total = carrito.reduce((accumulator, producto) => {
    return accumulator + producto.price;
  }, 0);

  const handleSacarProducto = (productoIndex) => {

    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(productoIndex, 1);

    actualizarCarrito(nuevoCarrito);

    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const realizarPago = () => {
    if (carrito.length === 0) {
      swal("El carrito está vacío. Agregue productos antes de continuar.");
      return; 
    }

    swal("Desea finalizar la compra?", {
      buttons: {
        catch: {
          text: "Si",
          value: "Si",
        },
        No: true,
      },
    }).then((value) => {
      switch (value) {
        case "Si":
          const confirmarElement = document.getElementById('confirmar');
          ReactDOM.render(
            <ConfirmarCompra actualizarCarrito={actualizarCarrito} />,
            confirmarElement
          );

          break;

        default:
          swal("Siga comprando");
      }
    });
  };

  const [showListCards, setShowListCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowListCards(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showListCards ? (
        <div className='acomodarCarrito'>
          <h2>Carrito de Compras</h2>
          <ul>
            {carrito.map((producto, index) => (
              <li className="contenidoCarrito" key={index}>
                Prodcto: {producto.name} - Cantidad comprada: {producto.cantidad} - Precio a pagar: ${producto.price} <button className="botonesSacar" onClick={() => handleSacarProducto(index)}>Sacar</button>
              </li>
            ))}
            <p>Total a pagar: ${total}</p>
            <button className='botonesPagar' onClick={realizarPago} >Pagar</button>
          </ul>
          <div id='confirmar'></div>
        </div>
      ) : (
        <div className='cargar'></div>
      )}
    </div>
  );
};

export default Carrito;
