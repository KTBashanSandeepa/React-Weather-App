import React from 'react'
import './WeatherApp.css'

import search_icon from '../Assests/Search_icon (1).png';
import cloud_icon from '../Assests/Cloudy.png';
import rain_icon from '../Assests/Rain.png';
import snow_icon from '../Assests/Winter.png';
import wind_icon from '../Assests/Wind.png';
import humidity_icon from '../Assests/Humidity.png';
import sun_icon from '../Assests/Sun.png';

const WeatherApp = () => {

    let api_key = "2b9c1bdaa597281fbdf0613b7b6f8b7f";

    const search = () => {
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return 0;
        }
    }
  return (
    <div className='container'>
      <div className="top-bar">
        <input type='text' className='cityInput' placeholder='Search City'></input>
        <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt=''/>
        </div>
      </div>

      <div className="weather-image">
        <img src={cloud_icon} alt='' className='clout_icon'/>
      </div>

      <div className='content'>

            <div className="weather-temp">24°c</div>
            <div className="weather-location">London</div>
            
            <div className="data-container">

                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">18 km/h</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>

            </div>

       </div>
    </div>
  )
}

export default WeatherApp
