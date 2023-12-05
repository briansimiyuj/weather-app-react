import ElementIcon from './ElementIcon'
import Data from './Data'
import humidity from '../img/humidity.png'
import wind from '../img/wind.png'

const WeatherElement = () =>{

    return(

        <div className="data-container">

            <div className="element">

                <ElementIcon src={humidity} alt="humidity"/>

                <Data
                    value={24}
                    text="Humidity"
                    unit="%"
                />

            </div>


            <div className="element">

                <ElementIcon src={wind} alt="wind"/>

                <Data
                    value={24}
                    text="Wind Rate"
                    unit="km/h"
                />

            </div>

        </div>

    )

}

export default WeatherElement