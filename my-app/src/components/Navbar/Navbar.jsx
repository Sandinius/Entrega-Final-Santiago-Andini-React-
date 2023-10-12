import { useNavigate } from 'react-router-dom';
import "../CardsWidget/CardsWidget.css";

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <div className='navbar'>
      <button onClick={() => navigate("/")} className='botones'>{props.home}</button>
      <button onClick={() => navigate("/humanos")} className='botones'>{props.humanos}</button>
      <button onClick={() => navigate("/aliens")} className='botones'>{props.aliens}</button>
    </div>
  );
}


export default Navbar