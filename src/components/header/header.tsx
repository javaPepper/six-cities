import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='header__left'>
      <Link to='/six-cities' className='header__logo-link'>
      </Link>
    </div>
  );
}

export default Header;
