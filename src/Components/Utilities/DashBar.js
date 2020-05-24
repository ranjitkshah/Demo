import React from 'react';
import styles from '../../CompStyles/UtilitiesStyle/dashBar.module.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
function DashBar() {
    return (
        <div className={styles.dashBar}>
            <ul>
            <li><Link className={styles.link} to='/lesson'>lessons</Link></li>
            <li><Link className={styles.link} to="/assignment">assignments</Link></li>
            <li><Link className={styles.link} to="/quiz">quiz</Link></li>
            </ul>
        </div>
    )
}

export default DashBar
