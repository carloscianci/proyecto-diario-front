import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Weather from './Components/Weather/Weather';
import Footer from './Components/Footer/Footer';
import GetApiNoticias from './Components/GetApiNoticias/GetApiNoticias';
import Navbar from './Components/Navbar/Navbar';



const App = () => {

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
          <div >
          
            <div className='col-12'>
            <Weather />
            </div>


            <GetApiNoticias />
          

          
            <Footer />
          </div>

      </div>
    </>
  );
}

export default App;
