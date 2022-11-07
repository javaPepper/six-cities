import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { getRating } from '../../utils';

type NearbyCardComponentProps = {
  offer: Offer;
} & HTMLAttributes<HTMLTitleElement>

function NearbyCardComponent({offer, onMouseEnter, onMouseLeave}: NearbyCardComponentProps) {
  const { id, type, isFavorite, previewImage, price, rating, title } = offer;

  return(
    <article className="near-places__card place-card" id={id.toString()} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="img" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          {(isFavorite && <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button"><svg className="place-card__bookmark-icon" width={18} height={19}><use xlinkHref="#icon-bookmark" /></svg><span className="visually-hidden">To bookmarks</span></button>)
          || <button className="place-card__bookmark-button button" type="button"><svg className="place-card__bookmark-icon" width={18} height={19}><use xlinkHref="#icon-bookmark" /></svg><span className="visually-hidden">To bookmarks</span></button>}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
}

export default NearbyCardComponent;