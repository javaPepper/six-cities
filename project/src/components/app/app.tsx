import MainPage from '../../pages/main/mainPage';
import { Offer } from '../../types/offer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites/favoritesPage';
import LoginPage from '../../pages/login/loginPage';
import RoomPage from '../../pages/roomPage/roomPage';
import NotFoundPage from '../../pages/404/notFoundPage';
import PrivateRouteComponent from '../privateRoute/privateRouteComponent';
import { AuthStatuses } from '../../const';

type AppProps = {
  offers: Offer[];
}

function App({offers}: AppProps) {
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
              <FavoritesPage/>
            </PrivateRouteComponent>
          }
        />
        <Route
          path={'/offer/:id'} element={<RoomPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
