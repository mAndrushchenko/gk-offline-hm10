import React, {useCallback} from "react"

const Weather = ({res}) => {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = weekDays[new Date().getDay()]
    const {name} = res
    const {description, icon} = res.weather[0]
    const {temp, feels_like} = res.main

    const kToC = useCallback((f) => {
        return Math.round(f - 273)
    }, [res])

    return (
        <div className="weathers-card">
            <h2>Current weather</h2>
            <h1>{name}</h1>
            <h2>{today}</h2>
            <h2><em>t </em>: {kToC(temp)}&deg;C</h2><h3>Feels like: {kToC(feels_like)}</h3>
            <img className="weather-img" src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
            <h2>Condition: {description}</h2>
        </div>
    )
}

export default Weather








