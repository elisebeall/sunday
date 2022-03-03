import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sections from './Sections';
import Articles from './Articles';
import ArticleDetails from './ArticleDetails';
import NotFound from './NotFound';
import '../css/App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Sections />
      <main>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:section" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
