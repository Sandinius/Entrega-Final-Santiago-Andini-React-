import { useState, useEffect} from 'react';
import Cards from '../ItemListContainer/ItemListContainer';
import '../ItemListContainer/ItemListContainer.css';
import { db } from "../../firebase/firebaseConfig"
import { collection, query, getDocs } from 'firebase/firestore';

export const ListProducts = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () =>{
    const q = query(collection(db,"products"));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      docs.push({...doc.data(), id: doc.id});
    });
    setProducts(docs);
  };
  getProducts();
  },[]);
  return (
    <div className='cartas'>
       {products.map((char) => {
        return (
            <div key={char.id}>
            <Cards char={char} />
            </div>
        );
       })}
        </div>
  );
};
export default ListProducts;