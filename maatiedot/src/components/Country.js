import React from 'react'

const Country = ({country, showCountry}) => {
  console.log('country: ', country)
  console.log('showcountry: ', showCountry)
    return (
        <p key={country.name}>
        {country.name}
        <button 
          key = {country.name}
          onClick = {showCountry}>show</button>
      </p>
    )
}

export default Country