import React from 'react'
import cl from './сities.module.css'
import dots from './../../../assets/dots.png'
import Piper from '../piper/piper';

const City = ({name}: any) => {
    console.log(name);
    return  <Piper gap={'21px'}>
        <div className={cl.name}>
            <p>{name}</p>
            <button className={cl.navigate}><img src={dots} alt="navigate"/></button>
        </div>
    </Piper>
};

export default City;
