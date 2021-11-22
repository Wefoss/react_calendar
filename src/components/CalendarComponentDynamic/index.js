import React from "react";
import style from "./componentDynamic.module.scss";
import { format, getDaysInMonth, startOfMonth } from "date-fns";
import PropTypes from 'prop-types';

import CalendarDayNames from "../CalendarDayNames";
import CalendarItems from "../CalendarItems";

/**
 * 
 * @param {Object} myDate 
 * @param {Function} nextMonthHandler 
 * 
 */
const CalendarComponentDynamic = ({ myDate, nextMonthHandler }) => {
  let arrayOfCurrentDay = [];
  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

  const getDay = () => {
    const days = getDaysInMonth(myDate);
    return days;
  };

  const nextMonth = (str) => {
      nextMonthHandler(str)
    arrayOfCurrentDay = [];
  };

  const listOfDays = () => {
    const nullIndex = dayNames.indexOf(format(startOfMonth(myDate), "EEEEE"));
    let numOfDAy = getDay();
    while (numOfDAy + nullIndex > 0) {
      arrayOfCurrentDay.unshift(numOfDAy--);
    }

    return arrayOfCurrentDay.map((el, id) => (
      <CalendarItems
        key={id}
        checked={checkedCurrendDate(el)}
        elem={el > 0 ? el : null}
      />
    ));
  };

  
  const checkedCurrendDate = (el) => {
    return (
      +format(myDate, "d") === el &&
      format(new Date(), "dd MMM yyyy") === format(myDate, "dd MMM yyyy")
    );
  };

  const renderDayNames = (el, i) => <CalendarDayNames key={i} dayIs={el} />;

  return (
    <article className={style.container}>
      <h2 className={style.title}>
        {format(myDate, "MMMM yyyy").toLocaleUpperCase()}
      </h2>
      <div className={style.day_wrap}>{dayNames.map(renderDayNames)}</div>
      <ul className={style.calendar_wrap}>{listOfDays()}</ul>
      <div className={style.btn_wrap}>
        <button onClick={() => nextMonth("minus")}>-Month</button>
        <button onClick={() => nextMonth("plus")}>Month+</button>
      </div>
    </article>
  );
};

CalendarComponentDynamic.propTypes = {
  myDate: PropTypes.object.isRequired,
  nextMonthHandler: PropTypes.func.isRequired
}


export default CalendarComponentDynamic;