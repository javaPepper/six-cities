import MainPage from '../../pages/main/main-page';
import { Routes, Route } from 'react-router-dom';
import FavoritesPage from '../../pages/favorites/favorites-page';
import RoomPage from '../../pages/room-page/room-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import IsAuthStatusComponent from '../auth/auth-status';
import HistoryRouterComponent from '../history-route/history-route';
import broserHistory from '../../browser-history';
import LoginPage from '../../pages/login/login-page';

function App() {
  return (
    <HistoryRouterComponent history={broserHistory}>
      <Routes>
        <Route path={'*'} element={<NotFoundPage />} />
        <Route path={'/six-cities'} element={<MainPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route
          path={'/favorites'}
          element={
            <IsAuthStatusComponent>
              <FavoritesPage />
            </IsAuthStatusComponent>
          }
        />
        <Route path={'/offer/:id'} element={<RoomPage />} />
      </Routes>
    </HistoryRouterComponent>
  );
}

export default App;
