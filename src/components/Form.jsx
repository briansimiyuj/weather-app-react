import search from '../img/search.png'
import { useState } from 'react'

const Form = ({ setLocation }) =>{

  const [locationInput, setLocationInput] = useState('')


  const handleInputChange = (e) =>{
  
    setLocationInput(e.target.value)

    setLocation(e.target.value)
  
  }

  return(

      <form>

        <input 
          type="text"
          placeholder="Search Location" 
          value={locationInput}
          onChange={handleInputChange}
        />


        <button className="search-icon">

          <img src={search} alt="search icon"/>

        </button>

      </form>

  )

}

export default Form 