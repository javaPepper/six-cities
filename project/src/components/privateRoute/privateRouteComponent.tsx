import { AuthStatuses } from '../../const';
import { Navigate } from 'react-router-dom';

type PrivateRouteComponentProps = {
  authStatuses: AuthStatuses;
  children: JSX.Element;
}

function PrivateRouteComponent(props: PrivateRouteComponentProps) {
  const { authStatuses, children } = props;

  return(
    authStatuses === AuthStatuses.No_Auth
      ? children
      : <Navigate to={'/login'}/>
  );
}

export default PrivateRouteComponent;
