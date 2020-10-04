import React from 'react';
import './Country.css'
const Country = (props) => {
    // console.log(props);
const {name,region,population,flag}=props.country
const flagStyle={height:'50px'}
    return (
     
        <div>
            
            <h4>Country name is {name}  </h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>{population} </p>
            <p><small>{region}</small></p>

        </div>
    );
};

export default Country;