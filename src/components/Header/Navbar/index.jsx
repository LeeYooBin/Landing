import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={style.navbar}>
      <div>
        <button onClick={toggleMenu} className={style.burger}>
          <div className={`${style.line} ${menuOpen ? style.line_open : ""}`} />
          <div className={`${style.line} ${menuOpen ? style.line_open : ""}`} />
          <div className={`${style.line} ${menuOpen ? style.line_open : ""}`} />
        </button>
      </div>
      <ul className={`${style.menu} ${menuOpen ? style.menu_open : ""}`}>
        <li>
          <Link
            to="/home"
            className={style.link}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={style.link}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/apps"
            className={style.link}
            onClick={() => setMenuOpen(false)}
          >
            Apps
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={style.link}
            onClick={() => setMenuOpen(false)}
          >
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
