import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const setCity = createAction('setCity',
  (city: string) => ({payload: city})
);
export const setOffers = createAction('setOffers',
  (city: string, offers: Offer[]) => ({payload: offers.filter((offer) => offer.city.name === city)})
);
