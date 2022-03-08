import { useContext} from 'react';
import { ArticlesContext } from '../contexts/ArticlesContext';
import { v4 as uuid } from 'uuid';
import ArticleCard from './ArticleCard';
import '../css/Articles.css';

const Articles = () => {
  const { filteredArticles } = useContext(ArticlesContext);
  console.log(filteredArticles)
  const displayArticlesList = filteredArticles.map(article => {
    return <ArticleCard article={article} key={uuid()} />
  });

  return (
    <div className="articles-container">
      {displayArticlesList}
    </div>
  )
}

export default Articles;
