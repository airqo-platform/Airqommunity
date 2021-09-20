import React from "react"
import{Switch,Route} from "react-router-dom"
import BwaiseMap from "../components/BwaiseMap";
import Contacts from "../components/Contacts";
import DataRegistry from "../components/DataRegistry";
import FirstPage from "../components/FirstPage";
import KyebandoMap from "../components/KyebandoMap";
import MapPage from "../components/MapPage";
import MulagoMap from "../components/MulagoMap";
import ImageGallery from "../components/ImageGallery";



export default function Routes(){
	return(
		<Switch>
			<Route path ="/" exact component ={FirstPage}/>
			<Route path ="/bwaisemap" component ={BwaiseMap}/>
			<Route path ="/contacts" component ={Contacts}/>
			<Route path ="/dataregistry" component ={DataRegistry}/>
			<Route path ="/gallery" component ={ImageGallery}/>
			<Route path ="/kyebandomap" component ={KyebandoMap}/>
			<Route path ="/map" component ={MapPage}/>
			<Route path ="/mulagomap" component ={MulagoMap}/>
			

					

		</Switch>
		);
}