import style from "./apps.module.css";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button";
import img1 from "../../assets/trafalgar-1.png";
import img2 from "../../assets/trafalgar-2.png";
import download from "../../assets/download.svg";

const Apps = () => (
  <div className={style.content}>
    <div className={style.wrapper}>
      <img src={img1} alt="Trafalgar" className={style.image} />
      <div className={style.text_wrapper}>
        <Heading>Leading healthcare providers</Heading>
        <hr className={style.line} />
        <Text>
          Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. 
          To us, it’s not just work. We take pride in the solutions we deliver
        </Text>
        <Button>Learn more</Button>
      </div>
    </div>
    <div className={`${style.wrapper} ${style.reverse}`}>
      <img src={img2} alt="Trafalgar" className={style.image} />
      <div className={style.text_wrapper}>
        <Heading>Download our mobile apps</Heading>
        <hr className={style.line} />
        <Text>
          Our dedicated patient engagement app and web portal allow you to access information instantaneously 
          (no tedeous form, long calls, 
          or administrative hassle) and securely
        </Text>
        <Button>
          Download
          <img src={download} alt="Download" className={style.icon}/>
        </Button>
      </div>
    </div>
  </div>
);

export default Apps;