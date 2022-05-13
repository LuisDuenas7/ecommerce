import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Shop from './pages/shop';
import Product from './pages/product';
import ProtectedPages from './pages/protectedPages';
import Cart from './pages/Cart';
import Succes from './pages/succes';

function App() {
  return (
    <div className="App">
      <Routes>
        {/*Rutas Publicas*/}
        <Route path='/login' element={<Login />} />
        <Route path='/signup'  />
        {/*Rutas Privadas*/}
        <Route element={<ProtectedPages/>}>
          <Route path='/' />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/shop/:id'  element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/cart/succes' element={<Succes/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;