import axios from "axios";
import React, { useState } from "react";

const Header = () => {

    const apiKey = "f56f24967aaf51182d1d4df628297c6d"

const [ erstinput ,setErstInput] = useState('')
const [data ,setData] = useState({})


const getWeat = (cityName)=>{


    const Url ="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(Url)
    .then((res)=>{
        console.log(res.data)
        setData(res.data)
    })
    .catch((err)=>console.err(err))
}

const handleSearch =()=>{
    getWeat(erstinput)
}




const handleInp = (e)=>{
    console.log(e.target.value)
    setErstInput(e.target.value)
}


  return (
    <div className="container">
      <div className="erste">
        <div className="zwei">
          <input type="text"
         value={erstinput}
         onChange={handleInp}
          
          
          />
          <br />
          <br />
          <button onClick={handleSearch}>SEARCH</button>
        </div>
        </div>
        <div className="alt">
          <div className="cer">
            <div className="ikon"></div>
            <div className="zayi">
            <h1>{data?.name}</h1><br />
            <h3>{data?.main?.temp} C</h3>
            </div>
            
          </div>
        </div>
      
    </div>
  );
};
export default Header;
