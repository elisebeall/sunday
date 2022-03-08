import ArticlesContextProvider from '../contexts/ArticlesContext';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sections from './Sections';
import Articles from './Articles';
import ArticleDetails from './ArticleDetails';
import '../css/App.css';

const App = () => {
  return (
    <ArticlesContextProvider>
      <nav>
        <Header />
        <Sections />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:section" element={<Articles />} />
          <Route path="/:section/:title" element={<ArticleDetails />} />
        </Routes>
      </main>
    </ArticlesContextProvider>
  )
}

export default App;
