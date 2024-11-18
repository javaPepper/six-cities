import { createAction } from '@reduxjs/toolkit';
import { AuthStatuses } from '../const';
import { Comment } from '../types/comment';
import { Offer } from '../types/offer';

export const setCity = createAction('setCity',
  (city: string) => ({ payload: city })
);

export const setFavoritesCity = createAction('setFavoriteCity',
  (city: string) => ({ payload: city })
);

export const setAllComments = createAction('setAllComments',
  (comments: Comment[]) => ({ payload: comments })
);

export const setComment = createAction('setComment',
  (comment: Comment) => ({ payload: comment })
);

export const setSortingValue = createAction('setSortingValue',
  (sortingValue: string) => ({ payload: sortingValue })
);

export const setOffers = createAction('setOffers',
  (data: Offer[]) => ({ payload: data })
);

export const setError = createAction('setError',
  (data: boolean) => ({ payload: data })
);

export const setOffersLoadingStatus = createAction('setOffersLoadingStatus',
  (status: boolean) => ({ payload: status })
);

export const setAuthorizationStatus = createAction('setAathorizationStatus',
  (authStatus: AuthStatuses) => ({ payload: authStatus })
);

export const redirectRoute = createAction('redirectRoute',
  (route: string) => ({ payload: route }));

export const setNearbyOffers = createAction('setNearbyOffers',
  (nearbyOffers: Offer[]) => ({ payload: nearbyOffers })
);

export const setRatingValue = createAction('setRatingValue',
  (rating: number) => ({ payload: rating })
);

export const setHotel = createAction('setHotel',
  (hotel: Offer) => ({ payload: hotel })
);

export const setFavoritesOffers = createAction('setFavoritesOffers',
  (favorites: Offer[]) => ({ payload: favorites })
);

export const setFavLength = createAction('setFavLength',
  (favLength: number) => ({ payload: favLength })
);
