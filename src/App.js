import './App.css';
import TopBanner from './component/TopBanner';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import BestProduct from './component/BestProduct';

function App() {
  return (
    <div className="Wrap">
      <TopBanner />
      <Header />
      <main>
        <MainVisual />
        <BestProduct />

      </main>


    </div>
  );
}

export default App;
