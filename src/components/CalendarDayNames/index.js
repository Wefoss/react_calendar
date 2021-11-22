import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {string} dayIs
 */
const CalendarDayNames = ({ dayIs }) => {
  return <p>{dayIs}</p>;
};

CalendarDayNames.propTypes = {
  dayIs: PropTypes.string.isRequired,
};

export default CalendarDayNames;
