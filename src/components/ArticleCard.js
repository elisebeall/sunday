import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticlesContext } from '../contexts/ArticlesContext';
import '../css/ArticleCard.css';

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();
  const { setArticle } = useContext(ArticlesContext);
  const { section, title, multimedia } = article;

  const setArticleDetails = () => {
    setArticle(article);
    navigate(`/${section}/${title}`);
  }

  const thumbnail = multimedia?.find(image => {
    return image.format === 'Large Thumbnail';
  })

  return (
    <article className="article-card">
      <h3 className="article-card-section">{section}</h3>
      <h2 onClick={() => setArticleDetails()}>{title}</h2>
      <img src={thumbnail?.url} alt={thumbnail?.caption} />
    </article>
  )
}

export default ArticleCard;
