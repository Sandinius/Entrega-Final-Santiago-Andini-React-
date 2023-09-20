import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cards = (props) => {
  return (
    <Card>
      <ShoppingCartIcon/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        1
        </Typography>
      </CardContent>
    </Card>
  );
}


export default Cards