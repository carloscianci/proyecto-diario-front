import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { useEffect, useState } from "react";
import Weather from './Components/Weather/Weather';
import Footer from './Components/Footer/Footer';
import GetApiNoticias from './Components/GetApiNoticias/GetApiNoticias';
import Navbar from './Components/Navbar/Navbar';
import FormUser from './Components/FormUser/FormUser';

const App = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' 
        });
    }
    return (
      <>
        <Navbar />
        <Weather />
        <GetApiNoticias />
        <FormUser />
        {showButton && (
            <button onClick={scrollToTop} className="btn btn-primary bi bi-chevron-double-up fs-1 back-to-top"></button>
        )}
        <Footer />
      </>
    );
}

export default App;
