import React from "react";
import style from './dateNow.module.css'

const CalendarDateNow = ({ date, dayName }) => {
  return (
    <>
      <div className={style.day_name}>{dayName}</div>
      <div className={style.date_num}>{date}</div>
    </>
  );
};

export default CalendarDateNow;
