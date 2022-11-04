import { Offer } from '../../types/offer';
import CardComponent from '../card-component/card-component';

type OffersListProps = {
  offers: Offer[];
  setActiveCard: (id: number) => void;
}

function OffersList(props: OffersListProps) {
  const { offers, setActiveCard} = props;

  return(
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <CardComponent offer={offer} key={offer.id} onMouseEnter={() => setActiveCard(offer.id)} onMouseLeave={() => setActiveCard(0)}/>)}
    </div>
  );
}

export default OffersList;
