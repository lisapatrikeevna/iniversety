import React from 'react'
import cl from './departments.module.css'
import dots from './../../../assets/dots.png'
import Piper from '../piper/piper';

const Department = ({name}: any) => {
    console.log(name);
    return  <Piper gap={'26px'}>
        <div className={cl.name}>
            <p>{name}</p>
            <button className={cl.navigate}><img src={dots} alt="navigate"/></button>
        </div>
    </Piper>
};

export default Department;
