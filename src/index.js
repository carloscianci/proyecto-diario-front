import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminNoticias from './pages/AdminNoticias/AdminNoticias';
import AdminSuscripciones from './pages/AdminSuscripciones/AdminSuscripciones';
import AdminUsuarios from './pages/AdminUsuarios/adminUsuarios';
import Login from './pages/Login/Login';
import Error404 from './pages/Error404/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<App />}/>
        <Route path='/AdminNoticias' element={<AdminNoticias />}/>
        <Route path='/AdminSuscrip' element={<AdminSuscripciones />}/>
        <Route path='/AdminUsuarios' element={<AdminUsuarios />} />
        <Route path='/LoginAdmin' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
