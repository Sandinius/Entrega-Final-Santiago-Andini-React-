import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Cards = ( {char} ) => {
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
      </CardContent>
    </Card>
  );
}


export default Cards