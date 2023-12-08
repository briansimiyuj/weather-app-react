import Form from './components/Form'      
import WeatherImage from './components/WeatherImage'
import WeatherTemp from './components/WeatherTemp'
import WeatherLocation from './components/WeatherLocation'
import WeatherElement from './components/WeatherElement'
import useSearch from './useSearch'
import { useState } from 'react'

function Script(){

  const APIKey = "30d95878ab2819e2f838a7f9024d365d",

        [location, setLocation] = useState('Nairobi'),
        
        URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${APIKey}`,

        { mainHumidity, mainTemp, windSpeed, weatherImage } = useSearch(URL)





  return (
    <div className="container">

      <Form setLocation={setLocation}/> 

      <WeatherImage weatherImage={weatherImage}/>

      <WeatherTemp mainTemp={mainTemp}/>

      <WeatherLocation location={location}/>
      
      <WeatherElement 
        mainHumidity={mainHumidity}
        windSpeed={windSpeed}
      />
    
    </div>
  )
}

export default Script