import './App.css';
import TopBanner from './component/TopBanner';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import BestProduct from './component/BestProduct';
import Footer from './component/Footer';

function App() {
  return (
    <div className="Wrap">
      <TopBanner />
      <Header />
      <main>
        <MainVisual />
        <BestProduct />

      </main>
      <Footer />
    </div>
  );
}

export default App;
