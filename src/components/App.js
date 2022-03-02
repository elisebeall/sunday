import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import Articles from './Articles';
import ArticleDetails from './ArticleDetails';
import NotFound from './NotFound';
import '../css/App.css';

const App = () => {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:section" element={<Articles />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App;
