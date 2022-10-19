import { Route, Routes } from 'react-router-dom';
import Wrapper from './component/Wrapper';
import TopBanner from './component/TopBanner';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import List from './pages/List';
import Itm from './pages/Itm';
import { NAVDATA, FILTER, ITMDATA } from './Data'
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
        <Route path={`/Itm/:${ITMDATA.id}`} element={<Itm FILTER={FILTER} ITMDATA={ITMDATA} NAVDATA={NAVDATA} />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}


export default App;
