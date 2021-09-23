import React from 'react'
import cl from './button.module.css'
import {IoAddCircle} from "react-icons/all";

type propsType = {
    margin?: string
    icon?:string
    title: string
    changeHandler: (t: any) => void
}
const Button = ({title,changeHandler,margin,icon}:propsType) => {

    return <button className={cl.orange} onClick={()=>changeHandler({title})} style={{margin:margin}}>
        {icon? icon : <IoAddCircle/>}
            <span>{title}</span>
        </button>
};

export default Button;
