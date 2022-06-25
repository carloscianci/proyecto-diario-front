import axios from "axios";
import { useState, useEffect } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Weather/Weather.css'

const Weather = () => {

    const [weather, setWeather] = useState([])
    const [temp, setTemp] = useState([])
    const [city, setCity] = useState([])

    const getWeather = async () => {
        const respWeather = await axios.get('https://api.openweathermap.org/data/2.5/weather?id=3836873&appid=6f77287a428004756d6b90863415d18f&units=metric&lang=sp, es')

        setWeather(respWeather.data.weather[0])
        setTemp(respWeather.data.main)
        setCity(respWeather.data)
    }

    // console.log(city);

    useEffect(() => {
        getWeather()
    }, [])
  
    const urlWeather = 'http://openweathermap.org/img/w/'
    const iconUrl = urlWeather + weather.icon + '.png';
   
   

    return (
   
        <div className="card-style">
            <div className=" wheather-img">
                <img className='card-img' src={iconUrl} alt="icono" />
            </div>

            <div className="card-title">
                <h3 className='card-temp'>{temp.feels_like}°C</h3>
                <h2 className='card-city'>{city.name}</h2>
            </div>   
        </div>
    );
};

export default Weather;