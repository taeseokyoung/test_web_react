import { Route, Routes } from 'react-router-dom';
import Wrapper from './component/Wrapper';
import TopBanner from './component/TopBanner';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Login from './component/Login';
import Wishlist from './component/Wishlist';
import List from './pages/List';
import Itms from './pages/Itms';
// import Sub from './pages/Sub';
import Woman from './pages/Woman';
import Man from './pages/Man';
import Acc from './pages/Acc';
import Cart from './pages/Cart';
import { NAVDATA, FILTER, ITMDATA, FOOTDATA } from './Data'
import './css/App.scss';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);
  return (
    <Wrapper>
      <TopBanner />
      <Header NAVDATA={NAVDATA} />
      <Routes>
        <Route path='/' element={<Main NAVDATA={NAVDATA} ITMDATA={ITMDATA} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/List' element={<List FILTER={FILTER} ITMDATA={ITMDATA} NAVDATA={NAVDATA} />} />
        <Route path='/List/Woman' element={<Woman NAVDATA={NAVDATA} ITMDATA={ITMDATA} />} />
        <Route path='/List/Man' element={<Man NAVDATA={NAVDATA} ITMDATA={ITMDATA} />} />
        <Route path='/List/Acc' element={<Acc NAVDATA={NAVDATA} ITMDATA={ITMDATA} />} />
        <Route path='/Itms/:id' element={<Itms FILTER={FILTER} ITMDATA={ITMDATA} NAVDATA={NAVDATA} cart={cart} setCart={setCart} />} />
        <Route path='/Cart' element={<Cart FILTER={FILTER} ITMDATA={ITMDATA} NAVDATA={NAVDATA} cart={cart} setCart={setCart} />} />
      </Routes>
      <Footer FOOTDATA={FOOTDATA} />
    </Wrapper>
  );
}


export default App;
