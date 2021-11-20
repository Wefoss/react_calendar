import React, { Component } from "react";
import { getDaysInMonth, startOfMonth, format } from "date-fns";

import style from "./calendarMain.module.css";
import CalendarDayNames from "../CalendarDayNames";
import CalendarItems from "../CalendarItems";

class CalendarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myDate: new Date(),
    };
    this.dayNames = ["S", "M", "T", "W", "T", "F", "S"];
    this.arrayOfCurrentDay = []
  }

  getDay = () => {
    const { myDate } = this.state;
    const days = getDaysInMonth(myDate);
    return days;
  };

  

  componentDidMount() {
      const {myDate} = this.state
   console.log(this.getDay());
   console.log((format(startOfMonth(myDate), 'EEEEE')));
   console.log(this.dayNames.indexOf((format(startOfMonth(myDate), 'EEEEE'))));
   console.log(''.repeat(this.dayNames.indexOf((format(startOfMonth(myDate), 'EEEEE')))));

     }

   testFunc = () => {
    let numOfDAy = this.getDay();
    while(numOfDAy > 0) {
        this.arrayOfCurrentDay.unshift(numOfDAy--)
           }
           this.arrayOfCurrentDay.unshift(null, '', '', '', '')
           return this.arrayOfCurrentDay.map((el, id) => <CalendarItems key={id}  elem={el}/>)
   }

  render() {
    return (
      <>
        <h1 className={style.title}>Calendar</h1>
        <div className={style.container}>
          <div className={style.day_Wrap}>
            {this.dayNames.map((el, i) => (
              <CalendarDayNames key={i} dayIs={el} />
            ))}
          </div>
           <div className={style.calendar_wrap}>
                 {this.testFunc()}
           </div>
        </div>
      </>
    );
  }
}

export default CalendarMain;
