import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapComponentProps = {
  offers: Offer[];
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function MapComponent({offers}: MapComponentProps) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const amsterdamCity = offers.find((offer) => offer.city.name === 'Amsterdam')!;
  const mapRef = useRef(null);
  const map = useMap(mapRef, amsterdamCity);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        });
        marker
          .setIcon(
            // здесь нужно использовать состояние
          )
          .addTo(map);
      });
    }
  }, [map, offers]);

  return(
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default MapComponent;
