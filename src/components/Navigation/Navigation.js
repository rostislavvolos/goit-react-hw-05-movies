import styles from './Navigation.module.css';

import {Switch, NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
    <nav className={styles.Navigation}>
        <NavLink exact to="/" className={styles.linknav} exact
        activeClassName={styles.activeLink}>HOMEPAGE</NavLink>
        <NavLink exact to="/trend-today" className={styles.linknav} exact
        activeClassName={styles.activeLink}>TRENDING TODAY</NavLink>
        <NavLink to="/movies" className={styles.linknav} exact
        activeClassName={styles.activeLink}>MOVIES</NavLink>
        
    </nav>
    )
}


export default Navigation;
