import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Articles from './Articles';
import { v4 as uuid } from 'uuid';
import sections from '../assets/sections.json';
import '../css/Main.css';

const Main = () => {
  const displaySections = sections.map(section => {
    return <Link to={`/${section}`} key={uuid()}><div>{section}</div></Link>
  })

  return (
    <>
      {displaySections}
    </>
  )
}

export default Main;
