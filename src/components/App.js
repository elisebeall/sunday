import { Fragment } from 'react';
import { Router, Route } from 'react-router-dom';
import '../css/App.css';

const App = () => {
  return (
    <>
      <head>
        <h1>sunday</h1>
      </head>
      <main>
        <Router>
          <Route to="/" element={<Main />} />
          <Route to="/articles/:id" element={<ArticleDetails />} />
        </Router>
      </main>
    <>
  )
}
