import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header__left'>
      <Link to='/six-cities' className='header__logo-link'>
        <img
          className='header__logo'
          src='../six-cities/public/img/logo.svg'
          alt='6 cities logo'
          width={81}
          height={41}
        />
      </Link>
    </div>
  );
}

export default Header;
