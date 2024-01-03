import { Link } from "react-router-dom";
import style from "./logo.module.css";

const Logo = () => (
  <Link to="/home" className={style.logo}>
    <div className={style.circle}>
      <p className={style.circle_letter}>T</p>
    </div>
    <p className={style.text}>Trafalgar</p>
  </Link>
);

export default Logo;
