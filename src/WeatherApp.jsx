import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp () {
    const [weatherInfo,setWeatherInfo] = useState({
        city : "surat",
        temp : 32,
        tampMax : 33,
        tampMin : 33,
        humidity : 55,
        feels_like : 37,
        weather : "broken clouds"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }
    return (
        <div className="WatherApp">
            <h2>Weather Information By Pragnesh</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox weatherInfo={weatherInfo} />
        </div>
    )
}