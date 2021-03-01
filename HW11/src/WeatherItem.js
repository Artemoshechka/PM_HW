import React from "react";
import { month, day } from './config'
import './Weather.css'

const Weather = ({date, max, min, atmospherePressure, humidity, windSpeed, windDirection, weather}) => {
    const getDate = new Date(date).getDate()
    const getMonth = new Date(date).getMonth()
    const getDay = new Date(date).getDay()
    const monthNum = month[getMonth]
    const dayNum = day[getDay]

    return <div>
        <header>
            <span className='date'>{monthNum} {dayNum} {getDate}</span>
        </header>
        <div className="weather__info">
            <p className="degrees">{max}°C / {min}°C</p>
            <p className="props">Weather: <img src={weather} alt="Weather pic"/></p>
            <p className="props">Humidity: {humidity}</p>
            <p className="props">Wind Speed: {windSpeed}</p>
            <p className="props">Wind Direction: {windDirection}</p>
            <p className="props">Atmospheric pressure: {atmospherePressure}</p>
        </div>
    </div>
}

class WeatherItems extends React.Component{
    render() {
        return <div className="Weather">
            <div className='content'>
                {this.props.weather.map((weatherItem) => <Weather key={weatherItem.date} {...weatherItem}/>)}
            </div>
        </div>;
    }
}

export default WeatherItems;