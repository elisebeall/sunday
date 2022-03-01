// Uses NYT 'Top Stories' API
// Documentation found below ⬇️
// https://developer.nytimes.com/docs/top-stories-product/1/overview

import sections from './assets/sections.json';

// API Key, will need to be made private
const myKey = 'PcxvOCuS1z1KXwNTHGzuGd5rxWZp2UeM';

// https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${myKey}
const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/';
const jsonUrl = '.json?api-key=';

const getSections = () => {
  return sections.reduce((acc, section) => {
    if (!acc[section]) {
      acc[section] = '';
    }
    acc[section] = baseUrl+section+jsonUrl+myKey;
    return acc;
  }, {})
}

const endpoints = getSections();

export default endpoints;
