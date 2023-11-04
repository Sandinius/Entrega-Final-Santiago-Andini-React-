import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Cards = ( {char} ) => {
  const navigate = useNavigate();
  let categoria =  char.category.toLowerCase()
  return (
    <Card>
      <CardMedia
        sx={{ height: 440 }}
        image= {char.img}
        title= {char.name}
      />
      <CardContent style={{height: 12 + 'vh'}}>
        <Typography gutterBottom variant="h5" component="div">
        {char.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {char.price} $
        </Typography>
        <Link onClick={() => navigate(`/${categoria}/${char.id}`)} className='link botones_items'>
          Mas informacion
        </Link>

      </CardContent>
    </Card>
  );
}


export default Cards