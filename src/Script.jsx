import Form from './components/Form'      
import WeatherImage from './components/WeatherImage'
import WeatherTemp from './components/WeatherTemp'
import WeatherLocation from './components/WeatherLocation'
import WeatherElement from './components/WeatherElement'
import { useState } from 'react'

function Script(){

  const [location, setLocation] = useState('Nairobi')

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
