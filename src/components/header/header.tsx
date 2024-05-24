import { Link } from "react-router-dom";

function Header() {
  return (
    <Link
      to='/six-cities'
      className='header__left'>
        <div className='header__logo-link'>
        </div>
    </Link>
  );
}

export default Header;
