import { Offer } from '../../types/offer';
import CardComponent from '../card-component/card-component';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps) {
  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardComponent offer={offer} key={offer.id}/>)}
    </div>
  );
}

export default OffersList;
