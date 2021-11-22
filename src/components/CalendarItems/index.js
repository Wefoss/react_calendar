import React from 'react';
import styles from './CalendarItems.module.css'

const CalendarItems = ({elem, checked}) => {
    
    return (
        <li className={styles[checked]} >{elem}</li>
    );
}

export default CalendarItems;
