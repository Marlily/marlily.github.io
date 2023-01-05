import { useState } from 'react';

const Advice = (props) => {

    return (
            <p className="advice" style={ props.visibility ? {opacity: 1} : {opacity: 0} }>"{props.adviceText}"</p>
    );
}

export default Advice;