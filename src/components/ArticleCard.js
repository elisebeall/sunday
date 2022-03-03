// import { Fragment } from 'react';
// import { v4 as uuid } from 'uuid';
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

  const displayThumbnail = multimedia.find(image => {
    return image.format === 'Large Thumbnail';
  })

  return (
    <article>
      <h3>{section}</h3>
      <a href={url}><h2>{title}</h2></a>
      <img src={displayThumbnail.url} alt={title} />
    </article>
  )
}

export default ArticleCard;
