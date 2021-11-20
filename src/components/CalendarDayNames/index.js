import React, { Component } from 'react';

class CalendarDayNames extends Component {
    render() {
        const {dayIs} = this.props
        return (
            <p>{dayIs}</p>
        );
    }
}

export default CalendarDayNames;
