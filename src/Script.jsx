import Form from './components/Form'      
import WeatherImage from './components/WeatherImage'
import WeatherTemp from './components/WeatherTemp'
import WeatherLocation from './components/WeatherLocation'

function Script(){
  return (
    <div className="container">

      <Form/> 

      <WeatherImage/>

      <WeatherTemp/>

      <WeatherLocation/>
    
    </div>
  )
}

export default Script
