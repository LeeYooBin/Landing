import style from "./about.module.css";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import ArticleCard from "../../components/ArticleCard";
import articles from "../../utils/articles";

const About = () => (
  <div className={style.content}>
    <Heading>Check out our latest article</Heading>
    <hr className={style.line} />
    <div className={style.article_wrapper}>
      {articles.map(article => (
        <ArticleCard
          key={article.id} 
          img={article.img}
          imgAlt={article.imgAlt}
          title={article.title}
          text={article.text}
        />
      ))}
    </div>
    <Button>View all</Button>
  </div>
);

export default About;
