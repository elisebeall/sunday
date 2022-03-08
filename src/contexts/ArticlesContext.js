import { createContext, useState } from 'react';

export const ArticlesContext = createContext();

const ArticlesContextProvider = (props) => {
  const [article, setArticle] = useState({});
  const [sectionArticles, setSectionArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);

  const searchArticles = (query) => {
    let filteringArticles = sectionArticles.filter(article => {
      return article.title.toLowerCase().includes(query.toLowerCase());
    });
    setFilteredArticles(filteringArticles);
  }

  return (
    <ArticlesContext.Provider
      value={{
        article,
        setArticle,
        sectionArticles,
        setSectionArticles,
        filteredArticles,
        setFilteredArticles,
        searchArticles
      }}>
        { props.children }
    </ArticlesContext.Provider>
  )
}

export default ArticlesContextProvider;
