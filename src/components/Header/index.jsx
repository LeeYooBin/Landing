import style from "./header.module.css";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => (
  <header className={style.header}>
    <Logo />
    <Navbar />
  </header>
);

export default Header;
