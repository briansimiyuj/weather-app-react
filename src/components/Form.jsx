import search from '../img/search.png'
import { useState } from 'react'

const Form = () =>{

  const [location, setLocation] = useState('')

    return(

        <form>

          <input 
            type="text"
            placeholder="Search Location" 
            value={location}
            onChange={e => setLocation(e.target.value)}
          />


          <button className="search-icon">

            <img src={search} alt="search icon"/>

          </button>

        </form>

    )

}

export default Form 