import { Route, Routes } from 'react-router-dom';
import Wrapper from './component/Wrapper';
import TopBanner from './component/TopBanner';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import List from './pages/List';
import Itms from './pages/Itms';
import { NAVDATA, FILTER, ITMDATA, FOOTDATA } from './Data'
import './css/App.scss';

function App() {
  return (
    <Wrapper>
      <TopBanner />
      <Header NAVDATA={NAVDATA} />
      <Routes>
        <Route path='/' element={<Main NAVDATA={NAVDATA} ITMDATA={ITMDATA} />} />
        <Route path='/List' element={<List FILTER={FILTER} ITMDATA={ITMDATA} NAVDATA={NAVDATA} />} />
        <Route path='/List/:category' element={<List ITMDATA={ITMDATA} />} />
        <Route path='/Itms/:itm' element={<Itms FILTER={FILTER} ITMDATA={ITMDATA} NAVDATA={NAVDATA} />} />
      </Routes>
      <Footer FOOTDATA={FOOTDATA} />
    </Wrapper>
  );
}


export default App;
