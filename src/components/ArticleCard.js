// import { Fragment } from 'react';
import { v4 as uuid } from 'uuid';
import '../css/ArticleCard.css';

const ArticleCard = ({ article }) => {
  const {
    section,
    title,
    abstract,
    url,
    byline,
    kicker,
    des_facet,
    org_facet,
    per_facet,
    geo_facet,
    multimedia
  } = article;

  const displayThumbnail = multimedia.map(image => {
    return image.format === 'Large Thumbnail' ? <img src={image.url} alt={image.caption} key={uuid()}/> : null;
  })

  return (
    <article>
      {section}
      {displayThumbnail}
      <a href={url}>{title}</a>
      {abstract}
    </article>
  )
}

export default ArticleCard;
