import React, { useEffect, useState } from 'react';

import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {


        setCountries(data)

        // console.log(data);
        data.map(country => country.name)
      })
      .catch(error => console.log(error))
  }, [])

  const handleAddedCountry=(country)=>{
    console.log("added",country);
  }
  return (


    <div className="App" >
      <h1>Country Loaded{countries.length}</h1>
      <h1>Country added </h1>

      {
        countries.map(country => <Country country={country} handleAddedCountry={handleAddedCountry} key={country.alpha3Code} > </Country>)
      }

    </div >
  )
}

export default App;
