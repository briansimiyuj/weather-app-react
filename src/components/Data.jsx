const Data = ({ value, text, unit }) =>{

    return(

        <div className="data">

            <div><span>{value}</span>{unit}</div>

            <p className="text">{text}</p>

        </div>

    )

}

export default Data