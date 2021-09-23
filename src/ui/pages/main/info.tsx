import React from 'react';
import cl from './info.module.css'
import Piper from "../../common/piper/piper";
import school from './../../../assets/School.png'
import cat from './../../../assets/cat.png'
import map from './../../../assets/map.png'
import robot from './../../../assets/Robot.png'
import {HiPencilAlt, HiTrash} from "react-icons/hi"
import Card from "../../common/card/card"
import TutorsList from '../../common/tutors/tutorsList'
import commonData from '../../../assets/commonData.json'
import CitiesList from "../../common/сities/сitiesList";
import Button from "../../common/button/button";
import DepartmentsList from "../../common/departments/departmentsList";

export type tutorType = {
    firstName: string
    lastName: string
    patronymic: string
    phone: string
    email: string
    city: string
    options: string
}

const Info = () => {
    return (
        <div className={cl.mainWrap}>
            info
        </div>
    );
};

export default Info;
