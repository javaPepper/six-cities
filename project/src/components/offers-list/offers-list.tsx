import { useState } from 'react';
import { Offer } from '../../types/offer';
import CardComponent from '../card-component/card-component';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps) {
  const [ activeCard, setActiveCard ] = useState(0);

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardComponent offer={offer} key={offer.id} onMouseEnter={() => setActiveCard(offer.id)}/>)}
    </div>
  );
}

export default OffersList;
