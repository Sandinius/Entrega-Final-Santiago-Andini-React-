import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const Cards = (props) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={props.image}
        alt={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}


export default Cards