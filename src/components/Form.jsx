import search from '../img/search.png'
import { useState } from 'react'
import useSearch from '../useSearch'

const Form = ({ setLocation }) =>{

  const [locationInput, setLocationInput] = useState('')
  
  
  const handleInputChange = (e) =>{
  
    setLocationInput(e.target.value)
  
  }

  
  const handleSubmit = (e) =>{
  
    e.preventDefault()
    
    setLocation(locationInput)

  }

  return(

      <form onSubmit={() => handleSubmit}>

        <input 
          type="text"
          placeholder="Search Location" 
          value={locationInput}
          onChange={handleInputChange}
        />


        <button className="search-icon" type="button" onClick={handleSubmit}>
 
          <img src={search} alt="search icon"/>

        </button>

      </form>

  )

}

export default Form 