import { useEffect, useState } from 'react';
import sectionsList from '../assets/sections.json';

const usePath = (path) => {
  const [section, setSection] = useState('');
  const [pathError, setPathError] = useState(false);

  useEffect(() => {
    if (!path) {
      setSection('home');
    } else {
      !sectionsList.includes(path) ? setPathError(true) : setSection(path);
    }
  })
  
  return { section, pathError };
}

export default usePath;
