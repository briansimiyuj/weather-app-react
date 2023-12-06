import Form from './components/Form'      
import WeatherImage from './components/WeatherImage'
import WeatherTemp from './components/WeatherTemp'
import WeatherLocation from './components/WeatherLocation'
import WeatherElement from './components/WeatherElement'
import { useState } from 'react'

function Script(){

  const [location, setLocation] = useState('Nairobi'),

        APIKey = "30d95878ab2819e2f838a7f9024d365d"


  const search = async() =>{
  
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${APIKey}`,

         response = await fetch(URL),

         data = await response.json()

    console.log(data)
  
  }

  search()

  return (
    <div className="container">

      <Form setLocation={setLocation}/> 

      <WeatherImage/>

      <WeatherTemp/>

      <WeatherLocation location={location}/>
      
      <WeatherElement/>
    
    </div>
  )
}

export default Script
