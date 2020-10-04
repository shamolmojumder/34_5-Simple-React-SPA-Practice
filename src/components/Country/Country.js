import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props);
const {name,region,population,flag}=props.country
const flagStyle={height:'50px'}
const countryStyle={border:"1px solid red",margin:"10px",padding:"10px"};
const handleAddedCountry=props.handleAddedCountry;
    return (
     
        <div style={countryStyle}>
            
            <h4>Country name is {name}  </h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>{population} </p>
            <p><small>{region}</small></p>
           <button onClick={()=>handleAddedCountry (props.country)}>Add country</button>

        </div>
    );
};

export default Country;