import './App.css';
import img1 from './Assets/Img/Varias-pruebas/1.jpg'
import CardGrande from './Component/Cards/CardGrande/CardGrande';
import CardMediana from './Component/Cards/CardMediana/CardMediana';
import CardPequeña from './Component/Cards/CardPequeña/CardPequeña';

import React from 'react';

const App = () => {
  return (
    <div>

         <CardGrande img= {img1} titulo= 'No lo entenderias' texto_parrafo= 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, ' />

         <CardPequeña img= {img1} titulo= 'Espectaculos' texto_parrafo= 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,' />

         <CardMediana  img= {img1} seccion= 'Comedias' titulo='lo que nunca vimos' texto_parrafo= 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500,' />
    </div>
  );
};

export default App;
