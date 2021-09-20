

import {Typography,CssBaseline,Toolbar,AppBar,Container,Paper} from "@material-ui/core"
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
const FirstPageContent =()=>{
    return(
        <div class = "content">
           
            <Typography variant="h1" >AirQommunity</Typography>
            <Typography variant="h1" component="h2">About </Typography>
        <Typography paragraph>
        AirQommunity is a network of different targeted community groups within a given AirQloud that serve as on-ground air quality data collectors. These community groups provide contextual evidence to better understand the causes of changes in air quality and how they relate to those living in the environment.
        </Typography>

        <Typography variant="h1" component="h2">Objective </Typography>
        <Typography paragraph>
        To increase the amount of contextual data available for targeted air quality monitored locations to help understand causes of spikes in poor air quality and individual perceptions of them.
        </Typography>
        <Typography paragraph>
        To identify general and targeted community champions who will take on the role of data collectors and communicate observations to AirQo. 
        </Typography>
        <Typography paragraph>
        To build a network of champions who can serve as a focus group to discuss their experiences and contribute insights and ideas on major issues and potential solutions to air quality challenges in their communities.
        </Typography>
     
        

        </div>
       
    )
}
export default FirstPageContent;