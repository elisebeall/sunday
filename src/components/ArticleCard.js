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
      <title>{section}</title>
      {displayThumbnail}
      <h3><a href={url}>{title}</a></h3>
      <h4>{abstract}</h4>
    </article>
  )
}

export default ArticleCard;
