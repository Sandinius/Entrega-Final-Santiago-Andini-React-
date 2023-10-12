import './App.css';
import Navbar from './components/Navbar/Navbar';
import './components/ItemListContainer/ItemListContainer.css';
import './components/Navbar/Navbar.css';
import Home from './components/Pages/Home';
import Humanos from './components/Pages/Humanos';
import Aliens from './components/Pages/Aliens';
import InformcionPersonal from './components/Pages/Detalles';

import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div >
      <Navbar home="Home" humanos="Humanos"  aliens="Aliens"/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/humanos' element={<Humanos />}/>
        <Route path='/aliens' element={<Aliens />}/>
        <Route path='/detalles/:id' element={<InformcionPersonal />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
