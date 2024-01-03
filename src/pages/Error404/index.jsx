import style from "./404.module.css";
import error from "../../assets/error-404.png";
import Heading from "../../components/Heading";

const Error404 = () => (
  <div className={style.content}>
    <img src={error} alt="Error 404" className={style.image} />
    <Heading>Page not found</Heading>
  </div>
);

export default Error404;