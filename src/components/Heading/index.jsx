import PropTypes from "prop-types";
import style from "./heading.module.css";

const Heading = ({ children, isHome }) => (
  <h1 
    className={`${style.heading} ${isHome && style.home}`}
  >
    {children}
  </h1>
);

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool
};

export default Heading;