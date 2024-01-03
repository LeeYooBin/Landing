import PropTypes from "prop-types";
import style from "./service-card.module.css";

const ServiceCard = ({ img, imgAlt, title, text }) => (
  <div className={style.content}>
    <img src={img} alt={imgAlt} className={style.image}/>
    <h2 className={style.title}>{title}</h2>
    <p className={style.text}>{text}</p>
  </div>
);

ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgAlt: PropTypes.string
};

export default ServiceCard;
