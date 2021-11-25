import React from "react";
import {format} from "date-fns";
import style from './componentStatic.module.scss'

import CalendarDateNow from "../CalendarDateNow";

const CalendarComponentStatic = ({myDate}) => {
  return (
    <article className={style.date_now}>
      <CalendarDateNow
        date={format(myDate, "dd")}
        dayName={format(myDate, "EEEE")}
      />
    </article>
  );
};

export default CalendarComponentStatic;
