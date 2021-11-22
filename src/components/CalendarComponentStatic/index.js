import React from "react";
import {format} from "date-fns";
import style from './componentStatic.module.scss'

import CalendarDateNow from "../CalendarDateNow";

const CalendarComponentStatic = () => {
  return (
    <article className={style.date_now}>
      <CalendarDateNow
        date={format(new Date(), "dd")}
        dayName={format(new Date(), "EEEE")}
      />
    </article>
  );
};

export default CalendarComponentStatic;
