import { useRef } from 'react';

function MapComponent() {
  const mapRef = useRef(null);
  return(
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default MapComponent;
