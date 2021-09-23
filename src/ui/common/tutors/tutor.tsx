import React from 'react'
import {tutorType} from "../../pages/main/info"
import cl from './tutor.module.css'
import {FaMobile, FaMapMarkerAlt} from "react-icons/fa";
import {IoMail} from "react-icons/all";


const Tutor = ({firstName, lastName, patronymic, phone, email, city, options}: tutorType) => {
    return (
        <div className={cl.wrapTutor}>
            <div className={cl.name}>
                <p>{firstName}</p>
                <p>{lastName}</p>
                <p>{patronymic}</p>
            </div>
            <div className={cl.contacts}>
                <p><span><FaMobile/></span> {phone} </p>
                <p><span><IoMail/> </span> {email}</p>
                <p><span><FaMapMarkerAlt/></span> {city}</p>
            </div>
            <div className={cl.option}>
                <p>{options}</p>
            </div>

        </div>
    );
};

export default Tutor;
