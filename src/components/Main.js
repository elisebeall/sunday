import { Fragment, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ArticlesContext } from '../contexts/ArticlesContext';
import NotFound from './NotFound';
import Error from './Error';
import Loading from './Loading';
import Articles from './Articles';
import usePath from '../hooks/usePath';
import useFetch from '../hooks/useFetch';
import endpoints from '../endpoints.js';
import '../css/Main.css';

const Main = () => {
  let path = useParams().section;
  const { section, pathError } = usePath(path);
  const { data, isLoading, error } = useFetch(endpoints[`${section}`]);
  const { setSectionArticles, setFilteredArticles } = useContext(ArticlesContext);

  useEffect(() => {
    setSectionArticles(data?.results);
    setFilteredArticles(data?.results);
  }, [data])

  return (
    <div className="main-container">
      {pathError ? <NotFound /> :
        <>
          {isLoading ? <Loading /> :
            <>
              {error ? <Error error={error} /> :
                <Articles />
              }
            </>
          }
        </>
      }
    </div>
  )
}

export default Main;
