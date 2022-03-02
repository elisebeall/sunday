import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Error from './Error';
import Loading from './Loading';
import ArticleCard from './ArticleCard';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';
import '../css/Articles.css';

const Articles = () => {
  const section = useParams().section;
  const { data, isLoading, error } = useFetch(endpoints[`${section}`]);
  let articles, displayArticlesList;

  if (!isLoading) {
    articles = data?.results;

    displayArticlesList = articles.map(article => {
      return <ArticleCard article={article} key={uuid()} />
    });
  }

  return (
    <>
      {isLoading ? <Loading /> :
        <>
          {error ? <Error error={error} /> :
            <>
              {displayArticlesList}
            </>
          }
        </>
      }
    </>
  )
}

export default Articles;
