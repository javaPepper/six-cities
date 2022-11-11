import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapComponentProps = {
  offers: Offer[];
  activeCard?: number;
  nearbyOffers: Offer[];
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

const enum MapStyle {
  SixHundred = '600',
  EightHundred = '800',
  TwelveHundred = '1200'
}

function MapComponent({offers, nearbyOffers, activeCard}: MapComponentProps) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const amsterdamCity = offers.find((offer) => offer.city.name === 'Amsterdam')!;
  const mapRef = useRef(null);
  const map = useMap(mapRef, amsterdamCity);

  useEffect(() => {
    if (map) {
      activeCard === undefined ?
        nearbyOffers.forEach((offer) => {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude
          });
          marker
            .setIcon(
              defaultCustomIcon
            )
            .addTo(map);
        }) :
        offers.forEach((offer) => {
          const marker = new Marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          });
          marker
            .setIcon(
              activeCard !== 0 && offer.id === activeCard
                ? currentCustomIcon
                : defaultCustomIcon
            )
            .addTo(map);
        });
    }
  }, [map, nearbyOffers, activeCard, offers]);

  return(
    <div
      style={activeCard === undefined ?
        {height: `${MapStyle.EightHundred}px`} :
        {height: `${MapStyle.SixHundred}px`, width: `${MapStyle.TwelveHundred}px`}}
      ref={mapRef}
    >
    </div>
  );
}

export default MapComponent;
