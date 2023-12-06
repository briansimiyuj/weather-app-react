const WeatherTemp = ({ mainTemp }) =>{

    return(

        <div className="weather-temp">

            <span>{mainTemp}</span>&deg;C

        </div>

    )

}

export default WeatherTemp