import style from "./home.module.css";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button";
import img from "../../assets/trafalgar-1.png";

const Home = () => (
  <div className={style.home}>
    <div className={style.text_wrapper}>
      <Heading isHome>Virtual healthcare for you</Heading>
      <Text>
        Trafalgar provides progressive, and affordable 
        healthcare, accessible on mobile and online 
        for everyone
      </Text>
      <Button isDark>Consult today</Button>
    </div>
    <div className={style.image_wrapper}>
      <img src={img} alt="Trafalgar" className={style.image}/>
    </div>
  </div>
);

export default Home;