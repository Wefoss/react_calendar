import React from "react";
import PropTypes from "prop-types";

import styles from "./CalendarItems.module.scss";

/**
 *
 * 
 * @param {boolean} checked
 * @param {null || number} elem
 */
const CalendarItems = ({ elem, checked }) => {
  return <li className={checked ? styles.checked : undefined}>{elem}</li>;
};

 const itemProps =  PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ])

  CalendarItems.propTypes = {
      elem :itemProps
  }


export default CalendarItems;
