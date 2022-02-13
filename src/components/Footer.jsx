import React from 'react'

function Footer() {
  return (
    <footer className="text-white body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
      
      <span className="ml-3 text-xl">Weather App</span>
    </a>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 React / Tailwind Weather App —
      <a href="https://twitter.com/LiamBrewster" className="text-white ml-1" rel="noopener noreferrer" target="_blank">@LiamBrewster</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
     
    </span>
  </div>
</footer>
  )
}

export default Footer