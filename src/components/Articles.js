import { Fragment } from 'react';
import { v4 as uuid } from 'uuid';
import Error from './Error';
import Loading from './Loading';
import ArticleCard from './ArticleCard';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';
import '../css/Articles.css';

const Articles = () => {
  const { data, isLoading, error } = useFetch(endpoints.home);
  let articles, displayArticlesList;

  if (!isLoading) {
    articles = data?.results;

    displayArticlesList = articles.map(article => {
      return <ArticleCard article={article} key={uuid()} />
    })
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
