import { useAppDispatch, useAppSelector } from '../../hooks';
import FavoritesComponent from '../../components/favorites-component/favorites-component';
import { useEffect } from 'react';
//import { setFavoritesCity } from '../../store/actions';

function FavoritesCityList() {
  const favorites = useAppSelector((state) => state.favorites);
  const dispatch = useAppDispatch();
  const stateCity = useAppSelector((state) => state.offer.city.name);

  // useEffect(() => {
  //   dispatch(setFavoritesCity(stateCity));
  // },[dispatch, stateCity]);

  return(
    <>
      {
        (favorites.map((offer) => (<li className="favorites__locations-items" key={offer.id}><div className="favorites__locations locations locations--current" ><div className="locations__item" ><a className="locations__item-link" href="#"><span>{offer.city.name}</span></a> </div></div><div className="favorites__places"> <FavoritesComponent offer={offer} /></div></li>)))
      }
    </>
  );
}

export default FavoritesCityList;
