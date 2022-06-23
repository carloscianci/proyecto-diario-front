import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import React from 'react';
import Weather from './Components/Weather/Weather';
import NewsFP from './Components/NewsFP/NewsFP';
import CardGiant from './Components/Cards/CardGiant/CardGrande';
import CardLittle from './Components/Cards/CardLittle/CardLittle';
import CardMedium from './Components/Cards/CardMedium/CardMedium';
import Separator from './Components/Separator/Separator';

const App = () => {
  const [newsFP, setNewsFP] = useState([])
  const [economy, setEconomy] = useState([])
  const [poli, setPoli] = useState([])


  const getBack = async() => {
      const  respApi = await axios.get('http://localhost:8000/noticia')

      setNewsFP(respApi.data.listaNoticias[0])
      setEconomy(respApi.data.listaNoticias[1])
      setPoli(respApi.data.listaNoticias[2])
    }
    console.log(newsFP);

  useEffect(() => {
    getBack()
}, [])
  return (
    
    <div>
        <Weather />

        <CardGiant seccion= {newsFP.titulo} text_p= {newsFP.texto} />

        <Separator />
        
        <div className="">

        <div className="news_compi">
        <CardMedium title= {economy.titulo} text_p= {economy.texto} />
        <CardLittle title= {economy.titulo} text_p= {economy.texto}/>
        <CardLittle title= {economy.titulo} text_p= {economy.texto}/>
        <CardLittle title= {economy.titulo} text_p= {economy.texto}/>
        </div>

        <Separator />

        <div className="news_compi">
        <CardMedium title= {poli.titulo} text_p= {poli.texto} />
        <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
        <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
        <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
        </div>

        <Separator />


        <div className="news_compi">
        <CardMedium title= {poli.titulo} text_p= {poli.texto} />
        <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
        <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
        <CardLittle title= {poli.titulo} text_p= {poli.texto}/>
        </div>

        </div>

       

    </div>

  );
};

export default App;
