import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { useState } from 'react';

const CardsDetalles = ( {char, carrito, agregarAlCarrito} ) => {

  const agregarAlCarritodetalles = () => {
    agregarAlCarrito(char, contador)

  setContador(1);
};
  const [contador, setContador] = useState(1);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  

  return (
    <Card>
      <CardMedia
        sx={{ height: 440 }}
        image= {char.img}
        title= {char.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {char.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {char.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {char.price} $
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        <Button onClick={aumentarContador}>+</Button> {contador} <Button onClick={disminuirContador}>-</Button>
        </Typography>
        <Button onClick={agregarAlCarritodetalles}>
        Agregar al carrito 
       </Button>
      </CardContent>
    </Card>
    
  );
}


export default CardsDetalles
