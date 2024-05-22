import LoginComponent from '../../components/login/login-component';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AuthStatuses } from '../../const';
import Header from '../../components/header/header';

function LoginPage() {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  if (authStatus === AuthStatuses.Auth) {
    return <Navigate to={'/six-cities'} />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Header />
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <LoginComponent />
      </main>
    </div>
  );
}

export default LoginPage;
