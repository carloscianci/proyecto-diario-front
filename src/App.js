import './App.css';
import FormUser from './Components/FormUser/FormUser';
import img1 from './Assets/Img/Varias-pruebas/1.jpg'
import React from 'react';
import Weather from './Components/Weather/Weather';
import CardGiant from './Components/Cards/CardGiant/CardGrande';
import CardMedium from './Components/Cards/CardMedium/CardMedium';
import CardLittle from './Components/Cards/CardLittle/CardLittle';
import Loguin from './Components/Loguin/Loguin';

const App = () => {
  return (
    <>
    <div>
        <Weather />

        <Loguin />
        
         <CardGiant img= {img1} seccion= 'No lo entenderias!' text_p= 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, ' />

        <div className="seccion-news">
         <CardLittle img= {img1} title= 'Espectaculos' text_p= 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,' />

         <CardLittle img= {img1} title= 'Espectaculos' text_p= 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,' />

         <CardLittle img= {img1} title= 'Espectaculos' text_p= 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,' />
        </div>
        
        <div className="seccion-sports">
         <CardMedium  img= {img1} seccion= 'Comedias' title='lo que nunca vimos' text_p= 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,' />

         <CardLittle img= {img1} title= 'Espectaculos' text_p= 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,' />


         <CardLittle img= {img1} title= 'Espectaculos' text_p= 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,' />
        </div>
    </div>
    <FormUser />
    </>
  );
};

export default App;
