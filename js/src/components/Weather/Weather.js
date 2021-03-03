import React, { useState, useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getWeather } from "../../store/weatherSlice"
import image from "../../css/weather-bg.jpg"
import Card from "./Card"

const Weather = () => {
    const weather = useSelector(state => state.weather)
    const dispatch = useDispatch()
    const [res, setRes] = useState(null)

    const handleClick = useCallback(() => {
        dispatch(getWeather())
    }, [res])

    useEffect(() => setRes(weather), [weather])

    return (
        <div className="box">
            <img
                src={image}
                className="bg"
                alt=""
            />
            <div className="weather-wrapper">
                <div className="images-content">
                    <button
                        className="btn btn-images"
                        onClick={handleClick}>
                        Upload weather
                    </button>
                    {res && <Card res={res}/>}
                </div>
            </div>
        </div>

    )
}

export default Weather


