import { useState, useEffect} from 'react';
import Cards from '../ItemListContainer/ItemListContainer';
import '../ItemListContainer/ItemListContainer.css';
import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig"

export const ListComida = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () =>{
    const q = query(collection(db,"products"), where("category","==", 'Comidas'));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      docs.push({...doc.data(), id: doc.id});
    });
    setProducts(docs);
  };
  getProducts();
  },[]);
  const [showListCards, setShowListCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowListCards(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
    {showListCards ? <div className='cartas'> {products.map((char) => { return ( <div key={char.id}> <Cards char={char} /></div>);})}</div> : <div className='cargar'></div>}
    </div>
  );
};
export default ListComida;