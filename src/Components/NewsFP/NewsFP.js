// import { useState } from 'react'
// import { useEffect } from 'react'
// import React from 'react'
// import axios from 'axios'
// import CardGiant from '../Cards/CardGiant/CardGrande';


// const NewsFP = () => {

//   const [news, setNews] = useState([])

//   const getBack = async() => {
//       const  respApi = await axios.get('http://localhost:8000/noticia')

//       setNews(respApi.data.listaNoticias[0])
//     }
//     console.log(news);

//   useEffect(() => {
//     getBack()
// }, [])


//   return (
//       <div>
//       {
//        <CardGiant seccion= {news.titulo} text_p= {news.texto} />
//       }
//     </div>
//   );
// };

// export default NewsFP;
