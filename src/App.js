import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

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
  return (


    <div className="App" >
      <h1>{countries.length}</h1>
      <ul>
        {countries.map(country => <li>{country.name}</li>)}
      </ul>
    </div >
  )
}

export default App;
