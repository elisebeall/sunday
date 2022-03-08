import { Fragment, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArticlesContext } from '../contexts/ArticlesContext';
import { v4 as uuid } from 'uuid';
import NotFound from './NotFound';
import Error from './Error';
import Loading from './Loading';
import ArticleCard from './ArticleCard';
import usePath from '../hooks/usePath';
import endpoints from '../endpoints.js';
import sectionsList from '../assets/sections.json';
import '../css/Articles.css';

const Articles = () => {
  let path = useParams().section;
  const { section, pathError } = usePath(path);
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  let displayArticlesList;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(endpoints[`${section}`]);

      if (response.status !== 200) {
        throw new Error(`${response.status}: ${response.statusText}. Cannot fetch articles.`);
      } else if (!response.ok) {
        throw new Error('Something has gone wrong, please try again.')
      }

      const data = await response.json();
      return data;
    }

    getData()
      .then(data => {
        setArticles(data.results);
        setError(null);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setArticles(null);
        setIsLoading(false);
      })
  }, [section])

  if (!isLoading) {
    displayArticlesList = articles.map(article => {
      return <ArticleCard article={article} key={uuid()} />
    });
  }

  return (
    <div className="articles-container">
      {pathError ? <NotFound /> :
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
      }
    </div>
  )
}

export default Articles;
