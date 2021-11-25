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
      myDate: new Date(),
    };
  }
  nextMonthHandler = (str) => {
    const { myDate } = this.state;
    this.setState({
      myDate: str === "plus" ? addMonths(myDate, 1) : addMonths(myDate, -1),
    });
  };

  render() {
    const { myDate } = this.state;
    return (
      <>
        <section className={style.calendar}>
          <LayoutContainer>
            <CalendarComponentStatic myDate={myDate} />

            <CalendarComponentDynamic
              nextMonthHandler={this.nextMonthHandler}
              myDate={myDate}
            />
          </LayoutContainer>
        </section>
      </>
    );
  }
}

export default CalendarMain;
