import React from 'react'

function Main() {
    //const Url = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${process.env.REACT_APP_OPEN_WEATHER_APP_ID}`

  return (
    <main className='flex-grow'>
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
            <h1 className='text-5xl'>The Weather in London is Cloudy</h1>
            </div>

        </div>
        <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">12 °C</h2>
                    <p className="leading-relaxed">Temperature</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">8 °C</h2>
                    <p className="leading-relaxed">Feels Like</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">35 mph</h2>
                    <p className="leading-relaxed">Wind</p>
                </div>
                <div className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">32%</h2>
                    <p className="leading-relaxed">Humidity</p>
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Main