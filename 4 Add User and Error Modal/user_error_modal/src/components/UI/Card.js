import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {
    return(
        // Because of 'props.className' you can use any elements
        // in  AddUser.module.css as a class name in Card Component
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    );

}

export default Card;
