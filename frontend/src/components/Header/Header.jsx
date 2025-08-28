import { NavLink } from "react-router";
import styles from "./header.module.css";
import "./header-a.css";
import DarkModeBttn from "../Buttons/DarkModeBttn/DarkModeBttn";
import LangBttn from "../Buttons/LangBttn/LangBttn";

const Header = () => {
  return (
    <header id={styles.header}>
      <NavLink className="header-a" id={styles.logo}>
        Logo
      </NavLink>
      <nav id={styles.nav}>
        <ul>
          <li>
            <NavLink className="header-a">About Company</NavLink>
          </li>
          <li>
            <NavLink className="header-a">Our Products</NavLink>
          </li>
          <li>
            <NavLink className="header-a">Careers</NavLink>
          </li>
          <li>
            <NavLink className="header-a">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
      <menu id={styles.menu}>
        <li>
          <DarkModeBttn />
        </li>
        <li>
          <LangBttn />
        </li>
      </menu>
    </header>
  );
};

export default Header;
