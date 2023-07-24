import { NavLink } from "react-router-dom";
import css from './header.module.css'


export default function Header() {
    return(
        <nav className={css.navigation}>
            <NavLink className={css['nav-link']} to='/'>Home</NavLink>
            <NavLink className={css['nav-link']} to='/movies'>Movies</NavLink>
        </nav>
    )
}