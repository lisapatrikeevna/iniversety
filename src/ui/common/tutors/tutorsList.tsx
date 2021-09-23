import React from 'react';
import Tutor from './tutor';
import {tutorType} from "../../pages/main/info";


type propsType = {
    tutors: Array<tutorType>
}
const TutorsList = ({tutors}: propsType) => {
    return (
        <>
            {tutors.map(t=>
                <Tutor key={t.email} firstName={t.firstName} lastName={t.lastName}
                patronymic={t.patronymic} phone={t.phone}
                email={t.email} city={t.city} options={t.options}/>)}

        </>
    );
};

export default TutorsList;
