import './App.css';
import Header from './components/mainHeader';
import Carrusel from './components/mainCarousel';
import FooterPrincipal from './components/footer';

function App() {
  return (
    <div className="">
      <Header/>

      <div className='container'>
        <Carrusel/>
      </div>
      
      <FooterPrincipal/>
    </div>
  );
}

export default App;
