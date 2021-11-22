import React from 'react';
import style from './layoutContainer.module.scss'

const LayoutContainer = ({children}) => {
    return (
        <div className={style.calendar_content}>
            {children}
        </div>
    );
}

export default LayoutContainer;
