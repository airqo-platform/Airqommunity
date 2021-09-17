import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
const Map = () => {
  const LatLngExpression = [48.864716, 2.349]; // Paris position

  return (
    <div className="map__container">
      <MapContainer
        center={LatLngExpression }
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
export default Map;