import React, {useState} from "react";
import axios from "axios";

function Main() {

    const [data,setData] = useState({});
    const [location,setLocation] = useState('');

    const Url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_APP_ID}`

    const searchLocation = (event) => {
        if(event.key === 'Enter'){
            axios.get(Url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }
        
    }

  return (
    <main className='flex-grow'>
        
        <div className="text-white body-font">
        
            <div className="container px-5 py-24 mx-auto ">
                <div className="search text-black">
                <input value={location} type="text" onChange={event => setLocation(event.target.value)} placeholder="Enter Location" onKeyPress={searchLocation} className=""/>
                </div>
                {data.name ? <h1 className='text-5xl'>The Weather in {data.name} is {data.weather[0].main}</h1> : <h1 className='text-5xl'>Enter Your Location Above</h1> }
            
            </div>

        </div>
        <div className="text-white body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                        {data.main ? data.main.temp.toFixed() : null} °C</h2>
                    <p className="leading-relaxed">Temperature</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    {data.main ? data.main.feels_like.toFixed() : null} °C</h2>
                    <p className="leading-relaxed">Feels Like</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    {data.wind ? data.wind.speed.toFixed() : null} mph</h2>
                    <p className="leading-relaxed">Wind</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                    {data.main ? data.main.humidity.toFixed() : null}%</h2>
                    <p className="leading-relaxed">Humidity</p>
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main