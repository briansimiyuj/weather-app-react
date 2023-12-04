import Form from './components/Form'      
import WeatherImage from './components/WeatherImage'
import WeatherTemp from './components/WeatherTemp'

function Script(){
  return (
    <div className="container">

      <Form/> 

      <WeatherImage/>

      <WeatherTemp/>
    
    </div>
  )
}

export default Script
