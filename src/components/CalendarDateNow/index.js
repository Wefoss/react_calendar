import React from "react";
import style from './dateNow.module.scss'
import PropTypes from 'prop-types';


/**
 * 
 *  
 * @param {string} date
 * @param {string} dayName
 */
const CalendarDateNow = ({ date, dayName }) => {
  return (
    <>
      <span className={style.day_name}>{dayName}</span>
      <span className={style.date_num}>{date}</span>
    </>
  );
};

CalendarDateNow.propTypes = {
  date: PropTypes.string.isRequired,
  dayName: PropTypes.string.isRequired
}

export default CalendarDateNow;
