import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const setCity = createAction('setCity',
  (city: string) => ({payload: city})
);

export const setOffers = createAction('setOffers',
  (city: string, offers: Offer[]) => ({payload: offers.filter((offer) => offer.city.name === city)})
);

export const setSortingValue = createAction('setSortingValue',
  (sortingValue: string) => ({payload: sortingValue})
);

export const getDataOffers = createAction('getDataOffers',
  (data: Offer[]) => ({payload: data})
);

export const setDataOffersLoadingStatus = createAction('setDataOffersLoadingStatus',
  (status: boolean) => ({payload: status})
);
