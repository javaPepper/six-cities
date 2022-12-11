import { AuthStatuses } from '../../const';
import { useAppSelector } from '../../hooks';
import LoginPage from '../../pages/login/login-page';

type PrivateRouteComponentProps = {
  children: JSX.Element;
}

function IsAuthStatusComponent({children}: PrivateRouteComponentProps) {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    authStatus === AuthStatuses.Auth
      ? children
      : <LoginPage/>
  );
}

export default IsAuthStatusComponent;
