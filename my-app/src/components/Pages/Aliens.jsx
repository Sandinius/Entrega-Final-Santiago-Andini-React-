import { useState, useEffect} from 'react';
import Cards from '../ItemListContainer/ItemListContainer';
import '../ItemListContainer/ItemListContainer.css';
import axios from 'axios';
import { Link } from '@mui/material';


export const ListAliens = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character/?species=alien").then((resp) =>{
          setChars(resp.data.results)
        })
      }
  ,[]);
  console.log(chars)
  return (
    <div className='cartas'>
       {chars.map((char) => {
        return (
            <div key={char}>
              <Link href={`/detalles/${char.id}`}>
            <Cards char={char} />
              </Link>
            </div>
        );
       })}
        </div>
  );
};
export default ListAliens