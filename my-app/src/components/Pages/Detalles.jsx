import { useState, useEffect} from 'react';
import CardsDetalles from '../CardsDetalles/CardsDetalles';
import '../CardsDetalles/CardsDetalles.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detalles.css'


export const InformcionPersonal = () => {
  const [char, setChars] = useState([]);
  let {id} = useParams()
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((resp) =>{
          setChars(resp.data)
        })
      }
  ,[id]);
  return (
    <div className='acomodar'>
            <div className='tarjetaPersonaje'>
           {char.id ? <CardsDetalles char={char} /> : null}
            </div>
        </div>
  );
};
export default InformcionPersonal