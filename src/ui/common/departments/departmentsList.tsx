import React from 'react';
import City from "./department";
import cl from "./departments.module.css";


type propsType = {
    department: Array<any>
}
const DepartmentsList = ({department}: propsType) => {
    return <div className={cl.wrapDepartments}>
        {department.map((d,i)=> <City key={i} name={d.name} />)}
    </div>
};

export default DepartmentsList;
