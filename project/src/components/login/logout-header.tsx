import { Link } from 'react-router-dom';
import broserHistory from '../../browser-history';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

function LogoutHeader() {
  const dispatch = useAppDispatch();
  const favCount = useAppSelector((state) => state.favorites.length);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            to={'/favorites'}
            className="header__nav-link header__nav-link--profile"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              Oliver.conner@gmail.com
            </span>
            <span className="header__favorite-count">{favCount}</span>
          </Link>
        </li>
        <li
          className="header__nav-item"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <Link to={broserHistory.location} className="header__nav-link">
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LogoutHeader;
