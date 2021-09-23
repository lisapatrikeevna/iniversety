import * as  React from 'react'
import cl from './card.module.css'
import {HiPencilAlt, HiTrash} from "react-icons/hi"
import school from './../../../assets/School.png'

type propsType={
    name:string
}
const Card = ({name}:propsType) => {

    return (
        <div className={cl.card}>
            <img src={school} alt={name} className={cl.imgSchool}/>
            <p>университет</p>
            <h4>{name}</h4>
            <div className={cl.btnWrap}>
                <button>
                    <HiPencilAlt/>
                </button>
                <button>
                    <HiTrash/>
                </button>
            </div>
        </div>
    );
};

export default Card;
