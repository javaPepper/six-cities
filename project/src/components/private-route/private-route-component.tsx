import { AuthStatuses } from '../../const';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

type PrivateRouteComponentProps = {
  children: JSX.Element;
}

function PrivateRouteComponent({children}: PrivateRouteComponentProps) {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return(
    authStatus === AuthStatuses.Auth
      ? children
      : <Navigate to={'/login'}/>
  );
}

export default PrivateRouteComponent;
