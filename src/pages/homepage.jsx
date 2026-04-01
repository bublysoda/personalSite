import './homepage.css';
import { useState, useEffect } from 'react';

export default function Homepage() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
    )
    const data = await res.json()
    setWeather(data)
  })
}, [])

  const [activeBlurb, setActiveBlurb] = useState(null);
  const blurbInfo = {
    guitar: "Playing since age 5, My main setup is a Fender Strat through a Mustang amp.",
    fEnd: "Specialized in React and EJS, with experience in Webpack, Rollup, and picking up new tools fast.",
    outside: "I love early morning hikes and soaking up nature, especially in the summer.",
    game: "Big into PC and VR gaming.  Strategy and competitive games are my go-to.",
    name: "I'm Derek Broden, 24-years-old, and a NHCC and SCSU alumni.",
    animal: "Animals just seem to love me! I think it's genetic since my dad has the same effect!",
    fight: "Started in karate, evolved into Muay Thai, BJJ, and MMA. Lost 100 pounds through training.",
    bEnd: "Backend built with Express and PostgreSQL, enhanced with Passport and Prisma, amongst others.",
    childcare: "Working with children since 15 as a camp counselor, and later coached kids in BJJ, basketball, and chess."
  }
  return(
    <div className="page">
      <div className="clickInfo">
        Click any of the topics below to learn more!
      </div>
      <div className="blurbs">
        {Object.keys(blurbInfo).map((key) =>
          <div
            key={key}
            className={key}
            onMouseLeave={() => setActiveBlurb(null)}
            onClick={() => setActiveBlurb(key)}>
              {key === 'guitar' ? 'Guitarist' :
              key === 'game' ? 'Gamer' :
              key === 'fight' ? 'Martial Artist' :
              key === 'fEnd' ? 'Front End Development' :
              key === 'name' ? 'Derek Broden' :
              key === 'bEnd' ? 'Back End Development' :
              key === 'outside' ? 'Nature Enthusiast' :
              key === 'animal' ? 'Animal Lover' : 'Childcare'}
          </div>
      )}
        {activeBlurb && (
          <div className='infoBox'>
            {blurbInfo[activeBlurb]}
          </div>
        )}
      </div>
      {weather && weather.main ? (
        <div className="weatherBox">
          <p>LOCATION: {weather.name}</p>
          <p>TEMP: {Math.round(weather.main.temp)}°F</p>
          <p>CONDITIONS: {weather.weather[0].description.toUpperCase()}</p>
          <p>HUMIDITY: {weather.main.humidity}%</p>
        </div>
) : (
        <div className="weatherBox">
          <p>LOADING WEATHER...</p>
        </div>
)}
    </div>
  )
}

//Add sound to click