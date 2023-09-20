import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const Navbar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.home}
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.contacto}
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.carrito}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


export default Navbar