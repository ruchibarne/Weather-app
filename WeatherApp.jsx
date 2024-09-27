import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
export default function App(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:'Pune',
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:'fog mist',
    });

    let updateInfo = (newInfo) => {
        isWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:'center'}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
        </div>
    );
}