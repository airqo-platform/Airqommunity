
import React,{useState,useEffect} from "react"
//import MessageDisplay from "./MessageDisplay"
import MaterialTable from "material-table";
import {Typography,TextField,Grid,CssBaseline,Toolbar,AppBar,Container,Paper} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


export default function FetchMessage(){
const [intitialData, setInitialData] =useState([{}]);

	var columns = [
{title: "Date", field: "Date", hidden: true},
{title: "Message", field: "Message"},
{title: "Date ", field: "DateTime"},
{title: "Time", field: "Time"},
{title: "Hour", field: "Hour" , hidden: true},
{title: "Author", field: "Author"},
{title: "Air quality", field: "Air quality"},

{title: "Day of the week", field: "weekday"},
{title: "Year", field: "year"},
{title: "Month", field: "month"},
{title: "Day", field:"day"},
{title: "Letter Count", field: "Letter_Count"},
{title: "Word Count", field: "Word_Count"},
{title: "Direction", field: "direction" , hidden: true},
]
useEffect(()=>{
	console.log("fetch data")
	fetch("http://127.0.0.1:5000/display_message_ky",{ method: 'GET', headers: { 
		'Content-Type': 'application/json'
}}).then(
		response => response.json()
		).then(data =>setInitialData(data)).catch(error => console.log(error))
},[]);
return(
		<div>


	<div style={{  margin: 'auto'}}>
		<MaterialTable
    title="Message logs"
    columns={columns}
    data ={intitialData}
    options={{
    	filtering:true,
    	exportButton:true,
    	       headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF'
        },
        sorting: true
    }}
    />
	</div>
	</div>
	)

}
