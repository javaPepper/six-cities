import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRouts } from '../const';
import { Offer } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { getDataOffers, setDataOffersLoadingStatus } from './action';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setDataOffersLoadingStatus(true));
    const {data} = await api.get<Offer[]>(ApiRouts.Offers);
    dispatch(setDataOffersLoadingStatus(false));
    dispatch(getDataOffers(data));
  },
);

