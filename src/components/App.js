import ArticlesContextProvider from '../contexts/ArticlesContext';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Sections from './Sections';
import Main from './Main';
import ArticleDetails from './ArticleDetails';
import '../css/App.css';

const App = () => {
  return (
    <ArticlesContextProvider>
      <nav>
        <Header />
        <Search />
        <Sections />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:section" element={<Main />} />
          <Route path="/:section/:title" element={<ArticleDetails />} />
        </Routes>
      </main>
    </ArticlesContextProvider>
  )
}

export default App;
