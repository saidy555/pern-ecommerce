import { NavLink } from "react-router";
import styles from "./header.module.css";
import "./header-a.css";
import DarkModeBttn from "../Buttons/DarkModeBttn/DarkModeBttn";
import LangBttn from "../Buttons/LangBttn/LangBttn";
import MenuBttn from "../Buttons/MenuBttn/MenuBttn";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu((currMenu) => !currMenu);
    console.log(menu);
  }
  return (
    <header id={styles.header}>
      <NavLink id={styles.logo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 167 165"
          role="img"
          aria-labelledby="title desc"
          width="40"
          height="40"
        >
          <title id="title">Lotus Pharma Logo</title>
          <desc id="desc">
            A stylized lotus flower emblem combined with a crescent, followed by
            the brand name Lotus Pharma.
          </desc>

          <g transform="translate(-4,-5)">
            <circle
              cx="88"
              cy="84"
              r="78"
              fill="none"
              stroke="#0f766e"
              stroke-opacity="0.12"
              stroke-width="8"
            />

            <path
              fill="#0f766e"
              d="M88 26c18 20 28 39 28 56 0 20-12 36-28 36s-28-16-28-36c0-17 10-36 28-56z"
            />

            <path
              fill="#0891b2"
              d="M54 44c-5 24 4 46 22 58-18 2-35-9-42-27-6-16 0-33 20-47z"
            />
            <path
              fill="#0891b2"
              d="M122 44c5 24-4 46-22 58 18 2 35-9 42-27 6-16 0-33-20-47z"
            />

            <path
              fill="#10b981"
              d="M38 72c-1 18 9 33 27 41-22 4-42-7-50-25-7-17 0-35 23-49 4 12 4 22 0 33z"
            />
            <path
              fill="#10b981"
              d="M138 72c1 18-9 33-27 41 22 4 42-7 50-25 7-17 0-35-23-49-4 12-4 22 0 33z"
            />

            <g transform="translate(74,104) rotate(45)">
              <rect
                x="20"
                y="-10"
                width="8"
                height="28"
                rx="2"
                fill="#0891b2"
              />
              <rect x="10" y="0" width="28" height="8" rx="2" fill="#0891b2" />
            </g>
          </g>
        </svg>
        <span>Lotus Care</span>
      </NavLink>

      <nav id={styles.nav}>
        <MenuBttn toggleMenu={toggleMenu} />
        <ul className={menu ? styles.show : styles.hide}>
          <li>
            <NavLink className="header-a">Who we are</NavLink>
          </li>
          <li>
            <NavLink className="header-a">Products</NavLink>
          </li>
          <li>
            <NavLink className="header-a">Careers</NavLink>
          </li>
          <li>
            <NavLink className="header-a">Partners</NavLink>
          </li>
          <li>
            <NavLink className="header-a">News</NavLink>
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
