import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth'
import {Gal_data} from './components/Gal_data'
import Services from './components/Services';
import { Navbar } from './components/Navbar';
import Manufacturer from './components/Manufacturer';
import Main_bg from './components/Main_bg';

function App() {
  return (
  
    <>
    <Navbar/>
    <Main_bg/>
    <Auth/>
    <Services/>
    <Gal_data/>
    <Manufacturer/>
    </>
  );
}

export default App;
