import style from "./services.module.css";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button";
import ServiceCard from "../../components/ServiceCard";
import services from "../../utils/services";

const Services = () => (
  <div className={style.services}>
    <Heading>Our services</Heading>
    <hr className={style.line} />
    <Text>
      We provide to you the best choices for you. Adjust it to your health 
      needs and make sure your undergo treatment with our highly qualified
      doctors you can consult with us which type of service is suitable 
      for your health
    </Text>
    <div className={style.card_wrapper}>
      {services.map(service => (
        <ServiceCard
          key={service.id}
          img={service.img}
          imgAlt={service.imgAlt}
          title={service.title}
          text={service.text}
        />
      ))}
    </div>
    <Button>Learn more</Button>
  </div>
);

export default Services;