import { Offer } from '../../types/offer';

type FavoritesCityListProps = {
  offers: Offer[];
}

function FavoritesCityList({offers}: FavoritesCityListProps) {
  return(
    <>
      {offers.map((offer) => <div className="favorites__locations locations locations--current" key={offer.id}><div className="locations__item" ><a className="locations__item-link" href="#"><span>{offer.city.name}</span></a></div></div>)}
    </>
  );
}

export default FavoritesCityList;
