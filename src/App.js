import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Weather from './Components/Weather/Weather';
import Footer from './Components/Footer/Footer';
import GetApiNoticias from './Components/GetApiNoticias/GetApiNoticias';
import Navbar from './Components/Navbar/Navbar';
import FormUser from './Components/FormUser/FormUser';
// import Login from './pages/Login/Login';



const App = () => {

  return (
    <>
      <Navbar />
      <Weather />
      <GetApiNoticias />
      <FormUser />
      <Footer />
    </>
  );
}

export default App;
