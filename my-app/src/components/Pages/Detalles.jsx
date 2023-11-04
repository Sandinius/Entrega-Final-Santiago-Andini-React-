import { useState, useEffect} from 'react';
import CardsDetalles from '../CardsDetalles/CardsDetalles';
import '../CardsDetalles/CardsDetalles.css';
import './Detalles.css'
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import { db } from "../../firebase/firebaseConfig"
import { useParams } from 'react-router-dom';

export const InformacionProductos = ({agregarAlCarrito, carrito}) => {
  const [product, setProduct] = useState([]);

  const {id} = useParams();
  useEffect(()=>{
    const getProduct = async () =>{
    const q = query(collection(db,"products"), where(documentId(),"==", id));
    const docs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      docs.push({...doc.data(), id: doc.id});
    });
    setProduct(docs);
  };
  getProduct();
  },[id]);
  const [showListCards, setShowListCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowListCards(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    
    <div className='acomodar'>      
    {showListCards ? <div>{product.map((char) => {
        return (
          <div className='tarjetaPersonaje' key={char}>
         <CardsDetalles char={char} carrito={carrito} agregarAlCarrito={agregarAlCarrito}/>
      </div>
        );
       })}</div>: <div className='cargar'></div>}
        </div>
  );
};
export default InformacionProductos