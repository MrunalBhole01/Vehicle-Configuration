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
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
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
