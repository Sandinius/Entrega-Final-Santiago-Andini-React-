import { useState, useEffect} from 'react';
import Cards from '../ItemListContainer/ItemListContainer';
import '../ItemListContainer/ItemListContainer.css';
import axios from 'axios';
import { Link } from '@mui/material';


export const ListCharacters = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((resp) =>{
          setChars(resp.data.results)
        })
      }
  ,[]);
  return (
    <div className='cartas'>
       {chars.map((char) => {
        return (
            <div key={char.id}>
              <Link href={`/detalles/${char.id}`}>
            <Cards char={char} />
              </Link>
            </div>
        );
       })}
        </div>
  );
};
export default ListCharacters