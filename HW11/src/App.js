import './App.css';
import React from 'react'
import WeatherItems from "./WeatherItem";
import { WEATHER } from "./config";

class App extends React.Component{
    render() {
        return (
            <div className="wrapper">
                <WeatherItems weather={ WEATHER }/>
            </div>
        );
    }
}

export default App;
