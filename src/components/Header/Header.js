import { NavLink, Outlet } from "react-router-dom";
import css from "./header.module.css";
import styled from "styled-components";

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: rgb(22, 3, 35);
  &.active {
    color: orange;
    backgroud-color: black;
    border-radius: 4px;
  }
`;

export default function Header() {
  return (
    <header>
      <nav className={css.navigation}>
        <NavLinkStyled className={css["nav-link"]} to="/">
          Home
        </NavLinkStyled>
        <NavLinkStyled className={css["nav-link"]} to="/movies">
          Movies
        </NavLinkStyled>
      </nav>
    </header>
  );
}
