import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardLittle from '../Cards/CardLittle/CardLittle';
import Separator from '../Separator/Separator';
import CardMedium from '../Cards/CardMedium/CardMedium';
import CardGiant from '../Cards/CardGiant/CardGrande';
import './GetApiNoticias.css'


const GetApiNoticias = () => {


    // const [news, setNews] = useState([])
    // const [newsF, setNewsF] = useState([])
    const [sports, setSports] = useState([])
    // const [eocnomy, setEconomy] = useState([])
    // const [espect, setEspect] = useState([])
    // const [politica, setPolitica] = useState([])
    
      
  // Filtrado de noticias

          // const Filtro = newsF.map(info => info.idtiponoticia[0])
  
          
            // const filterSports = Filtro.filter(n => n === 5)
  
  
    const getBack = async() => {
        const  respApi = await axios.get('http://localhost:8000/noticia')

        // setNews(respApi.data)
        // setNewsF(respApi.data.listaNoticias)
        setSports(respApi.data.listaNoticias)
        // setEconomy(respApi.data.listaNoticias)
        // setEspect(respApi.data.listaNoticias)
        // setPoli(respApi.data.listaNoticias)
        // setPolitica(respApi.data.listaNoticias)

      }
  
    useEffect(() => {
      getBack()
  }, [])

  // console.log(news);
     
  
  // ordena las noticias 
  const orderNews = (a, b) => {
    if (a.orders > b.orders){
      return -1;
    }

    if (a.orders < b.orders) {
      return 1;
    }
    
    return 0;
  }
  
  // Filtrado de noticias

          // const Filtro = newsF.map(info => info.idtiponoticia)
  
          
            // const filterSports = Filtro.filter(n => n === 5)
  
  

    return ( 
    
      
      
      <div className='container-fluid'>
        <div className="row">

          <CardGiant />

          <div className="pag_news_style">

              <Separator seccion= 'Deportes'/>
            <div className=" scroll-container d-flex justify-content-start">
              <CardMedium seccion='Lo mas importante del deporte'/>
                {
                  sports.sort(orderNews).filter(n => n.idtiponoticia === 5).map(data => <CardLittle title={data.titulo} text_p={data.resumen} img={data.urlImagen}/>)
                }
            </div >

              <Separator seccion= 'Politica'/>
            <div className="scroll-container d-flex justify-content-start">
              <CardMedium />
              {
                sports.sort(orderNews).filter(n => n.idtiponoticia === 3).map(data => <CardLittle title={data.titulo} text_p={data.resumen} img={data.urlImagen}/>)
              }
            </div>

              <Separator seccion= 'Economía'/>
            <div className="scroll-container d-flex justify-content-start">
              <CardMedium />
              {
                sports.sort(orderNews).map(data => <CardLittle title={data.titulo} text_p={data.resumen} img={data.urlImagen}/>)
              }
            </div>

              <Separator seccion= 'Policiales'/>
            <div className="scroll-container d-flex justify-content-start">
              <CardMedium />
              {
                sports.sort(orderNews).map(data => <CardLittle title={data.titulo} text_p={data.resumen} img={data.urlImagen}/>)
              }
            </div>

              <Separator seccion= 'Espectaculos'/>
            <div className="scroll-container d-flex justify-content-start">
              <CardMedium />
              {
                sports.sort(orderNews).map(data => <CardLittle title={data.titulo} text_p={data.resumen} img={data.urlImagen}/>)
              }
            </div>

          </div>
        </div>
      </div>
   
    );
};

export default GetApiNoticias;