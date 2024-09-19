import {Route,Routes} from 'react-router-dom';
import './MenuPrincipal.css';
import { Navbar } from './Navbar.jsx';
import { About, Contact, Compras,Home } from './../pages/index.js';
import { App } from '../../App.jsx';
import { Productos } from '../pages/Productos.jsx';

export const MenuPrincipal = () => {
  return (
    <div className='Menu'>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Compras" element={<Compras />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
    
    </div>
  )
}
