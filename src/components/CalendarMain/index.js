import React, { Component } from "react";
import { addMonths } from "date-fns";
import style from "./calendarMain.module.scss";

import CalendarComponentDynamic from "../CalendarComponentDynamic";
import CalendarComponentStatic from "../CalendarComponentStatic";
import LayoutContainer from "../../layout/LayoutContainer";

class CalendarMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staticDate: new Date('11-11-2022'),
      myDate: new Date(),
    };
  }
  nextMonthHandler = (str) => {
    const { myDate } = this.state;
    this.setState({
      myDate: str === "plus" ? addMonths(myDate, 1) : addMonths(myDate, -1),
    });
  };

  componentDidMount() {
    const {staticDate} = this.state
     this.setState({
      myDate: staticDate
     })
  } 
  

  render() {
    const { myDate, staticDate } = this.state;
    return (
      <>
        <section className={style.calendar}>
          <LayoutContainer>
            <CalendarComponentStatic myDate={staticDate} />

            <CalendarComponentDynamic
              nextMonthHandler={this.nextMonthHandler}
              myDate={myDate}
              staticDate={staticDate}
            />
          </LayoutContainer>
        </section>
      </>
    );
  }
}

export default CalendarMain;
