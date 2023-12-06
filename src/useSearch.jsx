import { useState, useEffect } from 'react'

import clearImage from './img/clear.png'
import cloudImage from './img/cloud.png'
import drizzleImage from './img/drizzle.png'
import rainImage from './img/rain.png'
import snowImage from './img/snow.png'

const useSearch = (URL) =>{

  const [location, setLocation] = useState('Nairobi'),

        [mainTemp, setMainTemp] = useState(null),

        [mainHumidity, setMainHumidity] = useState(null),

        [windSpeed, setWindSpeed] = useState(null),

        [weatherImage, setWeatherImage] = useState(null),


      APIKey = "30d95878ab2819e2f838a7f9024d365d"


    useEffect(() => {
      
      const fetchData = async() =>{

        try{
      
            const  response = await fetch(URL),

              data = await response.json(),
        
              { temp: updatedMainTemp } = data.main,
        
              { humidity: updatedMainHumidity } = data.main,
              
              { speed: updatedWindSpeed } = data.wind
      
      
          setMainTemp(Math.floor(updatedMainTemp))
          
          setMainHumidity(Math.floor(updatedMainHumidity))
          
          setWindSpeed(Math.floor(updatedWindSpeed))
          
          
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
          
        }catch(error){

          console.log(error)

        }
      
      }

      fetchData()

    }, [URL, APIKey])
    

    return { mainHumidity, mainTemp, windSpeed, weatherImage }

}

export default useSearch