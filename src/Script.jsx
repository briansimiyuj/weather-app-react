import Form from './components/Form'      
import WeatherImage from './components/WeatherImage'
import WeatherTemp from './components/WeatherTemp'
import WeatherLocation from './components/WeatherLocation'
import WeatherElement from './components/WeatherElement'
import { useState } from 'react'

function Script(){

  const [location, setLocation] = useState('Nairobi'),

        [mainTemp, setMainTemp] = useState(null),

        [mainHumidity, setMainHumidity] = useState(null),

        APIKey = "30d95878ab2819e2f838a7f9024d365d"


  const search = async() =>{
  
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${APIKey}`,

         response = await fetch(URL),

         data = await response.json(),

         mainTemp = Math.floor(data.main.temp),

         mainHumidity = Math.floor(data.main.humidity)


    setMainTemp(mainTemp)

    setMainHumidity(mainHumidity)
  
  }

  search()

  return (
    <div className="container">

      <Form setLocation={setLocation}/> 

      <WeatherImage/>

      <WeatherTemp mainTemp={mainTemp}/>

      <WeatherLocation location={location}/>
      
      <WeatherElement mainHumidity={mainHumidity}/>
    
    </div>
  )
}

export default Script
