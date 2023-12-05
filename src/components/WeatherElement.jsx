import ElementIcon from './ElementIcon'
import humidity from '../img/humidity.png'
import wind from '../img/wind.png'

const WeatherElement = () =>{

    return(

        <div className="data-container">

            <div className="element">

                <ElementIcon src={humidity} alt="humidity"/>

            </div>


            <div className="element">

                <ElementIcon src={wind} alt="wind"/>

            </div>

        </div>

    )

}

export default WeatherElement