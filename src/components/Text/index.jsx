import PropTypes from "prop-types";
import style from "./text.module.css";

const Text = ({ children }) => <p className={style.text}>{children}</p>

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
