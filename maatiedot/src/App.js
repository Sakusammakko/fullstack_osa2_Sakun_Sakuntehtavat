import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Country from './components/Country'
import axios from 'axios'
import ShowCountry from './components/ShowCountry'




const App = () => {
  const [ countries, setCountries] = useState([]) 
  const [filter, setFilter] = useState('')


useEffect(() => {
  console.log('effect')
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    })
}, [])

console.log('Render', countries.length, 'countries')
console.log('Countries: ', countries)

const handleFilterChange = (event) => {
  console.log(event.target.value)
  setFilter(event.target.value)
}


const CountriesToShow = () => {
  const list = countries.filter(country => country.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1)

  return (
    list.length > 10 ? (<p>Too many matches, specify another filter</p>)
    : list.length === 0 ? (<p></p>) 
    : list.length === 1 ? (<ShowCountry country = {list[0]}/>)
    : (<div>
      {list.map ((country,i) =>
      <Country 
        key = {i}
        country = {country}
        showCountry = {() => setFilter(country.name) } 
        />
      )}
    </div>)


  )

}
  
return (
  <div>
    <h1>Countries</h1>

    <Filter text = 'filter shown with' filter = {filter} handler = {handleFilterChange} />
    <CountriesToShow/>

  </div>
)

}

export default App