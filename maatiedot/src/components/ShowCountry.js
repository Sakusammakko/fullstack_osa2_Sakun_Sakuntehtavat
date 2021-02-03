import React, { useState, useEffect } from 'react'
import axios from 'axios'


const ShowCountry = ({country}) => {
    console.log('show country: ', country)

    const [ weather, setWeather] = useState() 
    const [ loading, setLoading] = useState(true)
     

    const API_KEY = "c936fd360548a885ab65deed148fdda7"
    //const API_KEY = process.env.REACT_APP_API_KEY


    useEffect(() => {
        console.log('effect')
        axios
          .get('http://api.weatherstack.com/current', {
              params: {
                access_key: API_KEY, query: country.capital
              }
          })
          .then(response => {
            console.log('Weather promise fulfilled')
            console.log('weather: ', response.data)
            setWeather(response.data)
            setLoading(false)
          })
      }, [])
    console.log('weather state: ', weather)

    if (loading) {
        return <div>loading...</div>
    }

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital} </p>
            <p>population {country.population} </p>
            <h2>languages</h2>
            <ul>{country.languages.map (language =>
                <li key = {language.name}>{language.name}</li>
                
            )}</ul>
            <img src= {country.flag} alt="Country flag" width="125"/>

            <h3>Weather in {country.capital}</h3>
            <p><strong>temperature: </strong> {weather.current.temperature} Celsius </p>
            <img src = {weather.current.weather_icons[0]} alt="Capital weather" widht="75" />
            <p><strong>wind: </strong> {weather.current.wind_speed} mph, direction {weather.current.wind_dir}</p>

        </div>
    )
}

export default ShowCountry