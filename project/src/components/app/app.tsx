import MainPage from '../../pages/main/main-page';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites/favorites-page';
import LoginPage from '../../pages/login/login-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/404/not-found-page';
import PrivateRouteComponent from '../private-route/private-route-component';
import HistoryRouterComponent from '../history-route/history-route';
import broserHistory from '../../browser-history';

function App() {

  return(
    <HistoryRouterComponent history={broserHistory}>
      <Routes>
        <Route
          path={'*'} element={
            <NotFoundPage/>
          }
        />
        <Route
          path={'/'} element={
            <MainPage/>
          }
        />
        <Route
          path={'/login'} element={<LoginPage/>}
        />
        <Route
          path={'/favorites'} element={
            <PrivateRouteComponent >
              <FavoritesPage />
            </PrivateRouteComponent>
          }
        />
        <Route
          path={'/offer/:id'} element={
            <RoomPage />
          }
        />
      </Routes>
    </HistoryRouterComponent>
  );
}

export default App;
