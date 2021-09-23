import React from 'react';
import City from "./сity";
import cl from "./сities.module.css";


type propsType = {
    cities: Array<string>
}
const CitiesList = ({cities}: propsType) => {
    return <div className={cl.wrapCities}>
        {cities.map((name,i)=> <City key={1+name} name={name}/>)}
    </div>
    // return <> {cities.map((name,i)=> <City name={name}/>)}</>
};

export default CitiesList;
