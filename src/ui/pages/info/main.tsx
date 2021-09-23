import React from 'react';
import cl from './Main.module.css'
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

const Main = () => {
    const addTutor=(title:string)=>{
        console.log('titleBtn', title);
    }
    return (
        <div className={cl.mainWrap}>
            {/*<Piper><button>ttt</button></Piper>*/}
            <div className={cl.universityInfo}>
                {/*<div className={cl.card}>*/}
                {/*    <img src={school} alt="" className={cl.imgSchool}/>*/}
                {/*<p>университет</p>*/}
                {/*<h4>MIT</h4>*/}
                {/*<div className={cl.btnWrap}>*/}
                {/*    <button>*/}
                {/*        <HiPencilAlt/>*/}
                {/*    </button>*/}
                {/*    <button>*/}
                {/*        <HiTrash/>*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*</div>*/}
                <Card name={commonData.name} />
                <p className={cl.desc}>
                    {commonData.description}
                </p>
            </div>
            <div className={cl.teachersInfo}>
                <div className={cl.heading}>
                    <img src={cat} alt=""/>
                    <p>Преподаватели</p>
                </div>
                <div className={cl.data}>
                    <Piper gap={'24px'}>
                        <TutorsList tutors={commonData.tutors}/>
                    </Piper>
                    <Button title={'Добавить преподавателя'} changeHandler={addTutor} margin={'24px 0 32px'}/>
                </div>
            </div>
            <div className={cl.citiesInfo}>
                <div className={cl.heading}>
                    <img src={map} alt=""/>
                    <p>Города</p>
                </div>
                <div className={cl.data}>
                    <CitiesList cities={commonData.cities}/>
                    <Button title={'Добавить город'} changeHandler={addTutor} margin={'66px 0 32px'}/>
                </div>
            </div>
            <div className={cl.facultiesInfo}>
                <div className={cl.heading}>
                    <img src={robot} alt="robot"/>
                    <p>Факультеты</p>
                </div>
                <div className={cl.data}>
                    <DepartmentsList  department={commonData.department}/>
                    <Button title={'Добавить факультет'} changeHandler={addTutor} margin={'24px 0 32px'}/>
                </div>
            </div>
        </div>
    );
};

export default Main;
