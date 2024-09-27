import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox(){
  const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1687265051328-3d9c67034cef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const RAIN_URL = "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let info = {
        city:'Pune',
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:'haze',
    };
    return(
        <div className="InfoBox">
            
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL: COLD_URL}
                  title="green iguana"
                />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   {info.city}{
                    info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/>: <AcUnitIcon/>
                   }
                 </Typography>
                 <Typography variant="body2" color='text.secondary' component={'span'}>
                   <p>Temperature = {info.temp}&deg:C</p>
                   <p>TempMax = {info.tempMax}&deg:C</p>
                   <p>TempMin = {info.tempMin}&deg:C</p>
                   <p>Humidity = {info.humidity}</p>
                   <p>The weather can be described as <i>{info.weather}</i> and feels like{info.feelslike}</p>
                   
                 </Typography>
               </CardContent>
            </Card> 
        </div> 
    );
}








