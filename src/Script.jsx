import Form from './components/Form'      
import WeatherImage from './components/WeatherImage'
import WeatherTemp from './components/WeatherTemp'
import WeatherLocation from './components/WeatherLocation'
import WeatherElement from './components/WeatherElement'

function Script(){
  return (
    <div className="container">

      <Form/> 

      <WeatherImage/>

      <WeatherTemp/>

      <WeatherLocation/>
      
      <WeatherElement/>
    
    </div>
  )
}

export default Script
