import React from 'react';
import styles from './PageTemplate.scss';
import ClassNames from 'classnames/bind'; 

// var classNames = require('classnames');
var cx=ClassNames.bind(styles);

const PageTemplate = ({children}) => {
    return(
        <div className={cx('page-template')}>
            <h1>일정관리</h1>
            <div className={cx('content')}>
                {children}
            </div>
        </div>
        )
}
export default PageTemplate;