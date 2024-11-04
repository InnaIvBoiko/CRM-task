import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.navMenuItem, isActive && css.active);
};


export default function Navigation() {
    return (
        <header className={css.mainHeader}>
            <nav className={css.navWrap}>
                <ul className={css.navMenu}>
                    <li>
                        <NavLink to={'/'} className={getNavLinkClass}>
                            Appointments
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/opportunities'} className={getNavLinkClass}>
                            Opportunities
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/clients'} className={getNavLinkClass}>
                            Clients
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
