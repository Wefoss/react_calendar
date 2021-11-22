import React, { Component } from "react";
import { getDaysInMonth, startOfMonth, format, addMonths } from "date-fns";

import style from "./calendarMain.module.css";
import CalendarDayNames from "../CalendarDayNames";
import CalendarItems from "../CalendarItems";
import CalendarDateNow from "../CalendarDateNow";

class CalendarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDate: new Date(),
    };
    this.dayNames = ["S", "M", "T", "W", "T", "F", "S"];
    this.arrayOfCurrentDay = [];
  }

  getDay = () => {
    const { myDate } = this.state;
    const days = getDaysInMonth(myDate);
    return days;
  };

  nextMonth = (str) => {
    const { myDate } = this.state;
    this.setState({
      myDate: str === "plus" ? addMonths(myDate, 1) : addMonths(myDate, -1),
    });
    this.arrayOfCurrentDay = [];
  };

  listOfDays = () => {
    const { myDate } = this.state;
    const nullIndex = this.dayNames.indexOf(
      format(startOfMonth(myDate), "EEEEE")
    );
    let numOfDAy = this.getDay();
    while (numOfDAy + nullIndex > 0) {
      this.arrayOfCurrentDay.unshift(numOfDAy--);
    }

    return this.arrayOfCurrentDay.map((el, id) => (
      <CalendarItems
        key={id}
        checked={this.checkedCurrendDate(el) && "checked"}
        elem={el > 0 ? el : null}
      />
    ));
  };

  checkedCurrendDate = (el) => {
    const { myDate } = this.state;
    return (
      +format(myDate, "d") === el &&
      format(new Date(), "dd MMM yyyy") === format(myDate, "dd MMM yyyy")
    );
  };

  renderDayNames = (el, i) => <CalendarDayNames key={i} dayIs={el} />;

  render() {
    const { myDate } = this.state;
    return (
      <>
        <section className={style.calendar}>
          <div className={style.calendar_content}>
            <div className={style.date_now}>
              <CalendarDateNow
                date={format(new Date(), "dd")}
                dayName={format(new Date(), "EEEE")}
              />
            </div>

            <article className={style.container}>
              <h2 className={style.container_title}>
                {format(myDate, "MMMM yyyy").toLocaleUpperCase()}
              </h2>
              <div className={style.day_wrap}>
                {this.dayNames.map(this.renderDayNames)}
              </div>
              <ul className={style.calendar_wrap}>{this.listOfDays()}</ul>
              <div className={style.btn_wrap}>
                <button onClick={() => this.nextMonth("minus")}>-Month</button>
                <button onClick={() => this.nextMonth("plus")}>Month+</button>
              </div>
            </article>
          </div>
        </section>
      </>
    );
  }
}

export default CalendarMain;
