import React from 'react';


const Piper = ({children, gap}) => {
    return (
        <div style={{background:'#fff',padding:gap}}>
            {children}
        </div>
    );
};

export default Piper;
