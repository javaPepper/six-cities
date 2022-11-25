import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { comments } from './mock/comments';
import { nearbyOffers } from './mock/nearby-offers';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-actions';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App comments={comments} offers={store.getState().offers} nearbyOffers={nearbyOffers} />
    </Provider>
  </React.StrictMode>,
);
