import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRouts, AuthStatuses } from '../const';
import { Offer } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { setDataError, setDataOffers, setAuthorizationStatus, redirectToRoute, setDataComments, setDataNearbyOffers, setDataHotel, setFavoritesOffers } from './actions';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import broserHistory from '../browser-history';
import { Comment } from '../types/comment';
import { PostData } from '../types/post-data';
import { Favorites } from '../types/favorites';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(ApiRouts.Offers);
      dispatch(setDataOffers(data));
    }
    catch {
      dispatch(setDataError(true));
    }
  },
);

export const fetchDataOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchDataHotel',
  async(id, {dispatch, extra: api}) => {
    try {
      const {data: offer} = await api.get<Offer>(`hotels/${id}`);
      dispatch(setDataHotel(offer));
      const {data: comment} = await api.get<Comment[]>(`comments/${id}`);
      dispatch(setDataComments(comment));
      const {data: nearbyOffers} = await api.get<Offer[]>(`hotels/${id}/nearby`);
      dispatch(setDataNearbyOffers(nearbyOffers));
    }
    catch {
      dispatch(setDataError(true));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async(_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setAuthorizationStatus(AuthStatuses.Auth));
      await api.get<string>(ApiRouts.Login);
    } catch{
      dispatch(setAuthorizationStatus(AuthStatuses.No_Auth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(ApiRouts.Login, {email, password});
    saveToken(token);
    dispatch(setAuthorizationStatus(AuthStatuses.Auth));
    dispatch(redirectToRoute(broserHistory.back()));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRouts.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthStatuses.No_Auth));
  }
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async(_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Favorites[]>('/favorite');
    dispatch(setFavoritesOffers(data));
  },
);

export const fetchPostOffers = createAsyncThunk<void, Favorites, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postFavorites',
  async({id, isFavorite}, {dispatch, extra: api}) => {
    const status = isFavorite ? 1 : 0;
    const {data} = await api.post<Favorites[]>(`favorite/${id}/${status}`);
    dispatch(setFavoritesOffers(data));
  },
);

export const fetchPostCommentAction = createAsyncThunk<void, PostData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'postComment',
  async({id, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment[]>(`comments/${id}`,{comment, rating});
    dispatch(setDataComments(data));
  }
);
