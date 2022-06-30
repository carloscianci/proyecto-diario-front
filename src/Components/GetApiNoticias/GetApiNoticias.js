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
    const [economy, setEconomy] = useState([])
    const [espect, setEspect] = useState([])
    const [politica, setPolitica] = useState([])
  
  
    const getBack = async() => {
        const  respApi = await axios.get('http://localhost:8000/noticia')

        
        setSports(respApi.data.listaNoticias)
        setEconomy(respApi.data.listaNoticias)
        setEspect(respApi.data.listaNoticias)
        setPolitica(respApi.data.listaNoticias)
        // setPoli(respApi.data.listaNoticias)

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

        {
                economy.filter(n => n.destacada_diario === 1).map(data => <CardGiant  seccion={data.titulo} text_p={data.resumen} img={data.urlImagen} />)
              }

          <div className="pag_news_style">

              {/* DEPORTES */}

              <Separator seccion= 'Deportes'/>
            <div className=" scroll-container d-flex justify-content-start">
                {
                  economy.filter(n => n.destacada_diario === 1).map(data => <CardMedium title={data.titulo} text_p={data.resumen} img={data.urlImagen} />)
                }
                {
                  sports.sort(orderNews).filter(n => n.idtiponoticia === 5).map(data => <CardLittle title={data.titulo} text_p={data.resumen} img={data.urlImagen}/>)
                }
            </div >

                {/* POLITICA */}

              <Separator seccion= 'Politica'/>
            <div className="scroll-container d-flex justify-content-start">

              {
                politica.filter(n => n.destacada_diario === 1).map(data => <CardMedium title={data.titulo} text_p={data.resumen} img={data.urlImagen} />)
              }
              
              {
                politica.sort(orderNews).filter(n => n.idtiponoticia === 3).map(data => <CardLittle title={data.titulo} text_p={data.resumen} img={data.urlImagen}/>)
              }
            </div>
                
                {/* ECONOMIA */}
              <Separator seccion= 'Economía'/>
            <div className="scroll-container d-flex justify-content-start">
              {
                economy.filter(n => n.destacada_diario === 1).map(data => <CardMedium title={data.titulo} text_p={data.resumen} img={data.urlImagen} />)
              }

              {
                economy.sort(orderNews).filter(n => n.idtiponoticia === 2).map(data => <CardLittle title={data.titulo} text_p={data.resumen} img={data.urlImagen}/>)
              }
            </div>

              {/* POLICIALES */}
              <Separator seccion= 'Policiales'/>
            <div className="scroll-container d-flex justify-content-start">

              {
                economy.filter(n => n.destacada_diario === 1).map(data => <CardMedium title={data.titulo} text_p={data.resumen} img={data.urlImagen} />)
              }

              {
                sports.sort(orderNews).map(data => <CardLittle title={data.titulo} text_p={data.resumen} img={data.urlImagen}/>)
              }
            </div>
              {/* ESPECTACULOS */}
              <Separator seccion= 'Espectaculos'/>
            <div className="scroll-container d-flex justify-content-start">
              {
                economy.filter(n => n.destacada_diario === 1).map(data => <CardMedium title={data.titulo} text_p={data.resumen} img={data.urlImagen} />)
              }

              {
                espect.sort(orderNews).filter(n => n.idtiponoticia === 4).map(data => <CardLittle title={data.titulo} text_p={data.resumen} img={data.urlImagen}/>)
              }
            </div>

          </div>
        </div>
      </div>
   
    );
};

export default GetApiNoticias;