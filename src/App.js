import './App.css';
import { Route, Routes } from 'react-router-dom';
import Wrapper from './component/Wrapper';
import TopBanner from './component/TopBanner';
import Header from './pages/Header';
import Main from './component/Main';
import NewSub from './pages/NewSub';
import Footer from './component/Footer';

function App() {
  return (
    <Wrapper>
      <TopBanner />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/new' element={<NewSub />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </Wrapper>
  );
}

export default App;
