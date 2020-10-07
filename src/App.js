import React, { useEffect, useState } from 'react';

import './App.css';
import Cart from './components/Cart/Cart';

import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([])
  const [cart,setCart]=useState([])

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
    const newCart=[...cart,countries]
    setCart(newCart)
  }
  return (


    <div className="App" >
      <h1>Country Loaded: {countries.length}</h1>
      <h1>Country added {cart.length}  </h1>
      <Cart></Cart>
     

      {
        countries.map(country => <Country country={country} handleAddedCountry={handleAddedCountry} key={country.alpha3Code} > </Country>)

      }

    </div >
  )
}

export default App;
