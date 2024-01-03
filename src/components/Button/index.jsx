import PropTypes from "prop-types";
import style from "./button.module.css"

const Button = ({ children, isDark }) => (
  <button className={`${style.button} ${isDark && style.dark}`}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  isDark: PropTypes.bool
};

export default Button;
