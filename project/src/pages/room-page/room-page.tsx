import { useParams } from 'react-router-dom';
import CommentForm from '../../components/comment-form/comment-form';
import NearbyOffersList from '../../components/nearby-offers-list/nearby-offers-list';
import ReviewsList from '../../components/reviews/reviews-list';
import MapComponent from '../../components/map-component/map-component';
import { getRating } from '../../utils/index';
import { useAppSelector } from '../../hooks';
import LoginHeaderComponent from '../../components/login/login-header-component';
import { fetchCommentsAction, fetchNearbyOffersAction } from '../../store/api-actions';
import { store } from '../../store';


function RoomPage() {
  const { id } = useParams<{id:string}>();
  const offers = useAppSelector((state) => state.offers);
  const theOffer = offers.find((offer) => offer.id.toString() === id);
  const isAuthStatus = useAppSelector((state) => state.authorizationStatus);
  const comments = useAppSelector((state) => state.comments);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  store.dispatch(fetchCommentsAction(id as string));
  store.dispatch(fetchNearbyOffersAction(id as string));

  if (!theOffer) {
    return null;
  }

  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </a>
            </div>
            <LoginHeaderComponent authStatus={isAuthStatus}/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {theOffer.images.map((image) => <div className="property__image-wrapper"key={image}><img className="property__image" src={image} alt="img" /></div>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {theOffer.isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">{theOffer.title}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRating(theOffer.rating)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{theOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {theOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {theOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
              Max {theOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{theOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {theOffer.goods.map((good) => <li className="property__inside-item" key={good}> {good}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={theOffer.host.avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {theOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {theOffer.host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {theOffer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewsList comments={comments}/>
                <CommentForm/>
              </section>
            </div>
          </div>
          <section className="property__map map" style={{display: 'flex', justifyContent: 'center'}}><MapComponent offers={nearbyOffers} height={600} width={1200} /></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearbyOffersList offers={nearbyOffers}/>
          </section>
        </div>
      </main>
    </div>

  );
}

export default RoomPage;
