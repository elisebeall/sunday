import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Articles from './Articles';
import { v4 as uuid } from 'uuid';
import sectionsList from '../assets/sections.json';
import '../css/Sections.css';

const Sections = () => {
  const displaySections = sectionsList.map(section => {
    return (
      <Link to={`/${section}`} key={uuid()}>
        {section}
      </Link>
    )
  })

  return (
    <div className="sections-nav">
      {displaySections}
    </div>
  )
}

export default Sections;
