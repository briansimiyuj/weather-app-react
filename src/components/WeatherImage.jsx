const WeatherImage = ({ weatherImage }) =>{

    return(

        <div className="weather-image">

            <img src={weatherImage} alt="weather-image"/>

        </div>

    )

}

export default WeatherImage