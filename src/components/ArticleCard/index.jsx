/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from "prop-types";
import style from "./article-card.module.css";

const ArticleCard = ({ img, imgAlt, title, text }) => (
  <div className={style.content}>
    <img src={img} alt={imgAlt} className={style.image} />
    <div className={style.wrapper}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.text}>{text}</p>
      <a href="#" className={style.link}>Read more</a>
    </div>
  </div>
);

ArticleCard.propTypes = {
  img: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ArticleCard;