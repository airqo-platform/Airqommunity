import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
//import AddLocationIcon from '@mui/icons-material/AddLocation';
import Header from './Header';

import BwaiseMapContent from './BwaiseMapContent';
import { Link } from 'react-router-dom';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  headerone:{
      backgroundColor:"Blue",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function DataRegistry() {
  const classes = useStyles();

  return (
      <div>
        
    <div className={classes.root}>
       
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
        <ListItem button  component={Link} to="/">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary= "First page" />
            </ListItem>

            <ListItem button  component={Link} to="/contacts">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary= "Contacts" />
            </ListItem>

            <ListItem button  component={Link} to="/dataregistry">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary= "Messages" />
            </ListItem>
            <ListItem button  component={Link} to="/dataregistry">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary= "Monitor Proximity" />
            </ListItem>
        </List>
        <Divider />
        <List>

        <ListItem button  component={Link} to="/gallery">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary= "Good AirQuality" />
            </ListItem>

            <ListItem button  component={Link} to="/">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary= "Bad Air Quality" />
            </ListItem>
            <ListItem button  component={Link} to="/">
              <ListItemIcon> <InboxIcon /> </ListItemIcon>
              <ListItemText primary= "Random" />
            </ListItem>
        </List>
        <Divider/>
        <List>
        <ListItem button  component={Link} to="/map">
        <ListItemIcon>  </ListItemIcon>
             <ListItemText primary= "All Locations" />
            </ListItem>

            <ListItem button  component={Link} to="/bwaisemap">
              <ListItemIcon>  </ListItemIcon>
              <ListItemText primary= "Bwaise" />
            </ListItem>
            <ListItem button  component={Link} to="/kyebandomap">
              <ListItemIcon>  </ListItemIcon>
              <ListItemText primary= "Kyebando" />
            </ListItem>
            <ListItem button  component={Link} to="/mulagomap">
              <ListItemIcon>  </ListItemIcon>
              <ListItemText primary= "Mulago" />
            </ListItem>
        </List>
      </Drawer>


     
      <main className={classes.content}>
      <Header/>

        <div className={classes.toolbar} />
        <BwaiseMapContent />
      </main>
    </div>
    </div>
  );
}
