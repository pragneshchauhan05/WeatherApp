import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import"./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox ({weatherInfo}) {
    let INIT_URL = "https://images.unsplash.com/photo-1635621821434-e0ead4d11859?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://images.unsplash.com/photo-1612175228968-956649d3d467?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAINY_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let info = weatherInfo;

    return (
        <div className='InfoBox'>
            <h1>Weather Information</h1>
             <div className="card-container">
                <Card sx={{ 
    maxWidth: 420,
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)"
}}>
                <CardMedia
                    sx={{ height: 220 }}
                    image={info.humidity > 80 ? RAINY_URL : (info.temp > 15) ? HOT_URL :COLD_URL}

                    title="green iguana"
                />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : (info.temp > 15) ? <SunnyIcon/> :<AcUnitIcon/>}
                 </Typography>
                 <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                    <p>Temrature : {info.temp}</p>
                    <p>Humidity : {info.humidity}</p>
                    <p>Min Temp : {info.tampMin}</p>
                    <p>Max Temp : {info.tampMax}</p>
                    <p>The Weather can be described as {info.weather} and fells like {info.feels_like}</p>
                </Typography>
            </CardContent>
            </Card>
             </div>
        </div>
    )
}