import React, { useState, useEffect } from 'react';
import ListCards from '../ListCards/ListCards';
import './Home.css';

function Home() {
  const [showListCards, setShowListCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowListCards(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showListCards ? <ListCards /> : <div className='cargar'></div>}
    </div>
  );
}

export default Home;
