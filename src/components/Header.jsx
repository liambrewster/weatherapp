import React from 'react'

function Header() {
  return (
    <header className="text-white body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a href="https://openweathermap.org/" className="mr-5 hover:text-sky-500 invisible md:visible">Open Weather API</a>
    </nav>
    <a href="http://liambrewster.co.uk" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0">
      
      <span className="ml-3 text-xl">React / Tailwind Weather App</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <a href="http://liambrewster.co.uk">

      <button className="inline-flex text-gray-900 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Check My Portfolio
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
        </a>
    </div>
  </div>
</header>
  )
}

export default Header