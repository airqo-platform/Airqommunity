import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { makeStyles } from "@material-ui/core";
// Add Marker on Map
// Add Marker on Map
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

  map: {
    height: `calc(100% - ${drawerWidth}px)`,
    width: `calc(100% `
  },
 

}));

const MulagoMap= () => {
  const classes = useStyles();
  return (
    
  <div className={classes.map}>
<MapContainer style={{ height: "100vh", width: "100%" }} center={[0.351598, 32.562228]} zoom={15} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[0.351598, 32.562228]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
    <Popup>
    AirQo Generation 5 monitor 
    </Popup>
  </Marker>
  <Marker position={[0.360227,32.557667]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
    <Popup>
      AirQommunity Champion
    </Popup>
  </Marker>
  <Marker position={[0.3819,  32.5762]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
    <Popup>
    AirQommunity Champion
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
};
export default MulagoMap ;