import React, {useState, useCallback} from "react";
import {request} from "../services/api/requests";
import {weather} from "../services/api/url";
import image from "../css/weather-bg.jpg";
import WeatherCard from "./WeatherCard";

const Weather = () => {
    const [res, setRes] = useState(null)

    const handleClick = useCallback(() => {
        request(weather)
            .then(setRes)
    }, [res])

    return (
        <div className="box">
            <img src={image} className="bg" alt=""/>
            <div className="weather-wrapper">
                <div className="images-content">
                    <button className="btn btn-images" onClick={handleClick}>Upload weather</button>
                    {res && <WeatherCard res={res}/>}
                </div>
            </div>
        </div>

    )
}

export default Weather


