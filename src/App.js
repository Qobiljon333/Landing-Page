import logo from './logo.svg';
import './App.css';
import {PRODUCTS} from "./static/static"
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Products from './components/products/Products';
import Information from './components/information/Information';
import Slider from './components/slider/Slider';
import InformationHided from './components/informationHided/InformationHided';
import ProductLanding from './components/productLanding/ProductLanding';
import Footer from './components/footer/Footer';
import Countrys from './components/countrys/Countrys';
import Cursor from './Cursor';
import GoogleMap from './components/map/GoogleMap';


function App() {
  return (
    <div className="App">
      <Cursor/>
      <Navbar />
      <Banner />
      <Products />
      <Information />
      <Slider />
      <InformationHided />
      <ProductLanding />
      <Countrys />
      <GoogleMap />
      <Footer />




     {/* {
      PRODUCTS.map(({name,svg})=>(
        <div>
          <h1 className='text-3xl'>{name } </h1>
          {
            svg
          }
        </div>
        
      ))
     } */}
    </div>
  );
}

export default App;
