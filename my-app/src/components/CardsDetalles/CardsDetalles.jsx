import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardsDetalles = ( {char} ) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 440 }}
        image= {char.image}
        title="Pokemon"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {char.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {char.species}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {char.status}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {char.gender}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Origen: {char.origin.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        Ubicacion: {char.location.name}
        </Typography>
      </CardContent>
    </Card>
  );
}


export default CardsDetalles