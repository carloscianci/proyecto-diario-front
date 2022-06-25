import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Weather from './Components/Weather/Weather';
import CardGiant from './Components/Cards/CardGiant/CardGrande';
import CardLittle from './Components/Cards/CardLittle/CardLittle';
import CardMedium from './Components/Cards/CardMedium/CardMedium';
import Separator from './Components/Separator/Separator';
import Footer from './Components/Footer/Footer';



const App = () => {
  const [newsFP, setNewsFP] = useState([])
  const [economy, setEconomy] = useState([])
  const [poli, setPoli] = useState([])
  const [shows, setShows] = useState([])


  const getBack = async() => {
      const  respApi = await axios.get('http://localhost:8000/noticia')

      setNewsFP(respApi.data.listaNoticias[0])
      setEconomy(respApi.data.listaNoticias[1])
      setPoli(respApi.data.listaNoticias[2])
      setShows(respApi.data.listaNoticias[2])
    }
    console.log(newsFP);

  useEffect(() => {
    getBack()
}, [])


  return (
      <div className='container-fluid'>
        <div className="responsive row">

          <div className='col-12'>
          <Weather />
          </div>

          <div className='col-12'>
          <CardGiant seccion= {newsFP.titulo} text_p= {newsFP.texto} />
          </div>

          <Separator seccion= 'Politica'/>
        


          <div className="news_compi row justify-content-center">
            <CardMedium title= {economy.titulo} text_p= {economy.texto} />
            <CardLittle title= {economy.titulo} text_p= {economy.texto}/>
            <CardLittle title= {economy.titulo} text_p= {economy.texto}/>
            <CardLittle title= {economy.titulo} text_p= {economy.texto}/>
          </div>

          <Separator seccion= 'Economia' />

          <div className="news_compi row justify-content-center">
            <CardMedium title= {poli.titulo} text_p= {poli.texto} />
            <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
            <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
            <CardLittle title= {economy.titulo} text_p= {economy.texto}/>
          </div>

          <Separator seccion= 'Policiales' />

          <div className="news_compi row justify-content-center">
          <CardMedium responsive_l='col-xl-4' title= {shows.titulo} text_p= {shows.texto} />
          <CardLittle title= {shows.titulo} text_p= {shows.texto}/>
          <CardLittle title= {shows.titulo} text_p= {shows.texto}/>
          <CardLittle title= {shows.titulo} text_p= {shows.texto}/>
          </div>

          <Separator seccion= 'Espectaculos' />

          <div className="news_compi row justify-content-center">
          <CardMedium title= {poli.titulo} text_p= {poli.texto} />
          <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
          <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
          <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
          </div>


        
        </div>
        {/* <FormUser /> */}
       <Footer />
      
    </div>
  );
}

export default App;
