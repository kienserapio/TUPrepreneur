import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/food' element={<ShopCategory banner={men_banner} category="food"/>}/>
        <Route path='/clothes' element={<ShopCategory banner={women_banner} category="clothes"/>}/>
        <Route path='/school' element={<ShopCategory banner={kids_banner} category="school"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignUp/>}/>
      </Routes> 
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
