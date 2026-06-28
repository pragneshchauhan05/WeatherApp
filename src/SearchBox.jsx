import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox ({updateInfo}) {

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let API_KEY = "1f789ac888a17ec7168c81a8b0515eb4";

    let getWeatherInfo = async () => {
        try{
            let res = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
            let jsonRes = await res.json();
            let result = {
                city : city,
                temp : jsonRes.main.temp,
                tampMax : jsonRes.main.temp_max,
                tampMin : jsonRes.main.temp_min,
                humidity : jsonRes.main.humidity,
                feels_like : jsonRes.main.feels_like,
                weather : jsonRes.weather[0].description
            }
                console.log(result);
            return result;
            } catch(err){
                throw err;
            }
    };
    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            setError(false);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }

    return (
        <div className="component">
            <div className='SearchBox'>
                <form onSubmit={handleSubmit}>
                    <TextField id="city" label="City" variant="outlined" value={city}  onChange={handleChange} />
                    <br />
                    <br />
                    <Button variant="contained" type='submit'>Search</Button>
                    {error && <p style={{color : "red"}}>No Such Place Exist</p> }
                </form>
            </div>
        </div>
    )
}