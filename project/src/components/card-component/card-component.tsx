import { Offer } from '../../types/offer';
import { getRating } from '../../utils/index';

type CardComponentProps = {
  offer: Offer;
}

function CardComponent (props: CardComponentProps) {
  const { offer } = props;
  const { id, isFavorite, isPremium, previewImage, price, rating, title, type } = offer;
  return(
    <article className="cities__card place-card" id={id.toString()}>
      {(isPremium && <div className="place-card__mark"><span>Premium</span></div>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="img" />
        </a>
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CardComponent;
