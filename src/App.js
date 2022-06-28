import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Weather from './Components/Weather/Weather';
import Footer from './Components/Footer/Footer';
import GetApiNoticias from './Components/GetApiNoticias/GetApiNoticias';



const App = () => {


  return (
      <div className='container-fluid'>
        <div >

          <div className='col-12'>
          <Weather />
          </div>

          <GetApiNoticias />
        
        
          <Footer />
        </div>
    </div>
  );
}

export default App;
