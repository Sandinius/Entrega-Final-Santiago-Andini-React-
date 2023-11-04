import { useNavigate } from 'react-router-dom';
import "../CardsWidget/CardsWidget.css";
import Cards from "../CardsWidget/CardsWidget"
import { Link } from '@mui/material';
import './Navbar.css';

const Navbar = (props,carrito) => {
  const navigate = useNavigate();

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  return (
    <div className='navbar'>
      <button onClick={() => navigate("/")} className='botones'>{props.home}</button>
      <div className="dropdown">
  <button onClick={() => myFunction()} className="dropbtn botones">Categorias</button>
  <div id="myDropdown" className="dropdown-content">
    <Link onClick={() => navigate("/comidas")}>Comidas</Link>
    <Link onClick={() => navigate("/bebidas")}>Bebidas</Link>
    <Link onClick={() => navigate("/juguetes")}>Juguetes</Link>
  </div>
</div>
      <button onClick={() => navigate("/carrito")} className='botones'><Cards carrito={props.carrito}/></button>
    </div>
  );
}


export default Navbar