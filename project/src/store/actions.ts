import { createAction } from '@reduxjs/toolkit';
import { AuthStatuses } from '../const';
import { Comment } from '../types/comment';
import { Offer } from '../types/offer';

export const setCity = createAction('setCity',
  (city: string) => ({payload: city})
);

export const setComments = createAction('setComments',
  (comments: Comment[]) => ({payload: comments})
);

export const setSortingValue = createAction('setSortingValue',
  (sortingValue: string) => ({payload: sortingValue})
);

export const setDataOffers = createAction('setDataOffers',
  (data: Offer[]) => ({payload: data})
);

export const setDataOffersLoadingStatus = createAction('setDataOffersLoadingStatus',
  (status: boolean) => ({payload: status})
);

export const setAuthorizationStatus = createAction('setAathorizationStatus',
  (authStatus: AuthStatuses) => ({payload: authStatus})
);

export const redirectToRoute = createAction('redirectToRoute',
  (route: void) => ({payload: route}));

export const setNearbyOffers = createAction('etNearbyOffers',
  (nearbyOffers: Offer[]) => ({payload: nearbyOffers})
);
