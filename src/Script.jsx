import Form from './components/Form'      
import WeatherImage from './components/WeatherImage'
import WeatherTemp from './components/WeatherTemp'
import WeatherLocation from './components/WeatherLocation'
import WeatherElement from './components/WeatherElement'
import clearImage from './img/clear.png'
import cloudImage from './img/cloud.png'
import drizzleImage from './img/drizzle.png'
import rainImage from './img/rain.png'
import snowImage from './img/snow.png'
import { useState } from 'react'

function Script(){

  const [location, setLocation] = useState('Nairobi'),

        [mainTemp, setMainTemp] = useState(null),

        [mainHumidity, setMainHumidity] = useState(null),

        [windSpeed, setWindSpeed] = useState(null),

        [weatherImage, setWeatherImage] = useState(null),


        APIKey = "30d95878ab2819e2f838a7f9024d365d"


  const search = async() =>{
  
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${APIKey}`,

         response = await fetch(URL),

         data = await response.json(),

         mainTemp = Math.floor(data.main.temp),

         mainHumidity = Math.floor(data.main.humidity),

         windSpeed = Math.floor(data.wind.speed)


    setMainTemp(mainTemp)

    setMainHumidity(mainHumidity)

    setWindSpeed(windSpeed)


    const iconMapping ={
      "01d": clearImage,
      "01n": clearImage,
      "02d": cloudImage,
      "02n": cloudImage,
      "03d": drizzleImage,
      "03n": drizzleImage,
      "04d": drizzleImage,
      "04n": drizzleImage,
      "09d": rainImage,
      "09n": rainImage,
      "10d": rainImage,
      "10n": rainImage,
      "13d": snowImage,
      "13n": snowImage
    }


    const apiIconCode = data.weather[0].icon

    if(apiIconCode && iconMapping.hasOwnProperty(apiIconCode)){

      setWeatherImage(iconMapping[apiIconCode])
    
    }

  }

  search()

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
