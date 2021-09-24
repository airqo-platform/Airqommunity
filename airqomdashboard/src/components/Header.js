import React from "react"

import {Typography,CssBaseline,Toolbar,AppBar,Container,Paper} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import { Link } from "react-router-dom"; 
export default function Header() {	
	return(

<div>

		<CssBaseline/>
		<AppBar position ="relative">
			<Toolbar>
				<Typography variant ="h6"  color="inherit">
					AirQommunity
				</Typography>

	<Button  >
    
      </Button>
      <Button>
         
         </Button>
         <Button>
         
         </Button>
		 <pre>
		{new Date().toLocaleString() + ""}
		</pre>
			</Toolbar>
		</AppBar>

	
</div>		
		);
}