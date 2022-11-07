import { Marker, Icon } from 'leaflet';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { Offer } from '../../types/offer';
import { URL_MARKER_DEFAULT } from '../../const';

type RoomMapComponentProps = {
  offers: Offer[];
  nearbyOffers: Offer[];
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function RoomMapComponent({offers, nearbyOffers}: RoomMapComponentProps) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const amsterdamCity = offers.find((offer) => offer.city.name === 'Amsterdam')!;
  const mapRef = useRef(null);
  const map = useMap(mapRef, amsterdamCity);

  useEffect(() => {
    if(map) {nearbyOffers.forEach((offer) => {
      const marker = new Marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      });
      marker
        .setIcon(
          defaultCustomIcon
        )
        .addTo(map);
    });
    }
  }, [map, nearbyOffers, amsterdamCity]);

  return(
    <div
      style={{height: '600px', width: '1200px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default RoomMapComponent;
