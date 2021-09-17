import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { makeStyles } from "@material-ui/core";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({

  map: {
    height: `calc(100% - ${drawerWidth}px)`,
    width: `calc(100% `
  },
 

}));

const MapPage = () => {
  const classes = useStyles();
  return (
    
  <div className={classes.map}>
<MapContainer style={{ height: "100vh", width: "100%" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
    </div>
  );
};
export default MapPage;