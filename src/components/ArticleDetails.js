import { Fragment, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ArticlesContext } from '../contexts/ArticlesContext';
import '../css/ArticleDetails.css';

const ArticleDetails = () => {
  const { article } = useContext(ArticlesContext);
  const {
    section,
    title,
    abstract,
    byline,
    published_date,
    kicker,
    des_facet,
    org_facet,
    per_facet,
    geo_facet,
    multimedia
  } = article;

  const backgroundImage = multimedia.find(image => {
    return image.format === 'Super Jumbo';
  })

  const { url, caption, height, width } = backgroundImage;

  const tags = des_facet.concat(org_facet).concat(org_facet).concat(per_facet).concat(geo_facet);
  const displayTags = tags.map((tag, index) => {
    if (index !== tags.length-1) {
      return `${tag}, `;
    } else {
      return tag;
    }
  });

  return (
    <div className="details-container">
      <div className="image-container">
        <img className="bg-image" src={url} alt={caption} />
      </div>
      <article className="article-details-container">
        <h2 className="details-title">{title}</h2>
        <h3 className="details-byline">{byline}<span>  |  </span>published {published_date}</h3>
        <p className="details-abstract">{abstract}</p>
        <h4 className="details-tags"><span>Tags:</span> {displayTags}</h4>
      </article>
    </div>
  )
}

export default ArticleDetails;
