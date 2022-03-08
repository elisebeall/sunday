import { useState, useContext } from 'react';
import { ArticlesContext } from '../contexts/ArticlesContext';
import '../css/Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const { searchArticles } = useContext(ArticlesContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
    searchArticles(e.target.value);
  }

  return (
    <div className="search-container">
      <input
        aria-describedby="search-articles"
        type="text"
        placeholder="search"
        value={query}
        onChange={e => handleChange(e)}
      />
    </div>
  )
}

export default Search;
