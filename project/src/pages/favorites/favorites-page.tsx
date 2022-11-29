import FavoritesComponent from '../../components/favorites-component/favorites-component';
import LoginHeaderComponent from '../../components/login/login-header-component';
import { useAppSelector } from '../../hooks';

function FavoritesPage() {
  const offers = useAppSelector((state) => state.offers);
  const isAuthStatus = useAppSelector((state) => state.authorizationStatus);

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
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.filter((offer) => offer.isFavorite === true).map((offer) => <FavoritesComponent offer={offer} key={offer.id}/>)}
                </div>
              </li>
            </ul>
          </section>
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
