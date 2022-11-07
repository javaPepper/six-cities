import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { comments } from './mock/comments';
import { nearbyOffers } from './mock/nearby-offers';
import { offers } from './mock/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App comments={comments} offers={offers} nearbyOffers={nearbyOffers} />
  </React.StrictMode>,
);
