import search from '../img/search.png'

const Form = () =>{

    return(

        <form>

          <input type="text" placeholder="Search Location"/>


          <button className="search-icon">

            <img src={search} alt="search icon"/>

          </button>

        </form>

    )

}

export default Form 