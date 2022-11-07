import MainPage from '../../pages/main/main-page';
import { Offer } from '../../types/offer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites/favorites-page';
import LoginPage from '../../pages/login/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/404/not-found-page';
import PrivateRouteComponent from '../private-route/private-route-component';
import { AuthStatuses } from '../../const';
import { Comment } from '../../types/comment';

type AppProps = {
  offers: Offer[];
  comments: Comment[];
  nearbyOffers: Offer[];
}

function App({offers, comments, nearbyOffers}: AppProps) {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={'*'} element={<NotFoundPage/>}
        />
        <Route
          path={'/'} element={<MainPage offers={offers}/>}
        />
        <Route
          path={'/login'} element={<LoginPage/>}
        />
        <Route
          path={'/favorites'} element={
            <PrivateRouteComponent authStatuses={AuthStatuses.Auth}>
              <FavoritesPage offers={offers}/>
            </PrivateRouteComponent>
          }
        />
        <Route
          path={'/offer/:id'} element={<RoomPage comments={comments} offers={offers} nearbyOffers={nearbyOffers}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
