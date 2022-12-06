import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoritesCityList from '../../components/favorites-city-list/favorites-city';
//import FavoritesComponent from '../../components/favorites-component/favorites-component';
import LoginHeaderComponent from '../../components/login/login-header-component';
import { useAppDispatch, useAppSelector } from '../../hooks';
//import { setFavoritesCity } from '../../store/actions';

function FavoritesPage() {
  const isAuthStatus = useAppSelector((state) => state.authorizationStatus);
  const favorites = useAppSelector((state) => state.favorites);
  // const dispatch = useAppDispatch();
  // const city = useAppSelector((state) => state.offer.city.name);

  // useEffect(() => {
  //   dispatch(setFavoritesCity(city));
  // },[dispatch, city]);

  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to='/' className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
              </Link>
            </div>
            <LoginHeaderComponent authStatus={isAuthStatus}/>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favorites.length > 0 ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoritesCityList />
                {/* <div className="favorites__places">
                  {favorites.map((offer) => <FavoritesComponent offer={offer} key={offer.id}/>)}
                </div> */}
              </ul>
            </section> :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
        </a>
      </footer>
    </div>

  );
}

export default FavoritesPage;
