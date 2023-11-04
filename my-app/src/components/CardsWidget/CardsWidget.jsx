import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useEffect } from 'react';

const Cards = ({ carrito }) => {

  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  useEffect(() => {
    const totalItems = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    setCantidadCarrito(totalItems);
  }, [carrito]);
  
  return (
    <div className='cartCompra'>
      <h1>
        <p>
          <ShoppingCartIcon />
          {cantidadCarrito}
        </p>
      </h1>
    </div>
  );
}

export default Cards;
