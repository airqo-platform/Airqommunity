import React from "react"
//material ui for designing
import {Typography,TextField,Grid,CssBaseline,Toolbar,AppBar,Container,Paper,} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import image from './imageone.jpg'
import imagetwo from "./imagetwo.JPG"
import imagethree from "./imagethree.JPG"
import imagefour from './imagefour.jpg'
import imagefive from "./imagefive.jpg"
import imagesix from "./imagesix.jpg"


// styling 
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: "100%" ,

  },
  cardContent: {
    flexGrow: 1,
  },

}));




export default function GoodImage (){
	 const classes = useStyles();
     const onView =(e)=>{
         alert("view Image")
     }
	return(
		<>
					<Container maxWidth ="sm">
						<Typography variant="h3" align ="center" color ="textPrimary" gutterBottom>
							Photo Album
						</Typography>
					<Typography variant="h6" align ="center" color ="textSecondary" paragraph>
						Some of the highlight Images from community

					</Typography>							
																
					</Container>

		<div className={classes.heroContent} >

					<Container className={classes.cardGrid} maxWidth="md">
			
					<Grid container spacing ={4}>
						<Grid item  xs={12} sm={6} md={4}>
				                <Card className={classes.card}>
				                <CardHeader

							        title="Bwaise"
							        subheader="April 24, 2021"
							      />
				                  <CardMedia
				                    className={classes.cardMedia}  component="img"
				                    src={image}
				                    
				                    title="Image title"
				                  />
				                  <CardContent className={classes.cardContent}>
				                    <Typography onClick={onView}>
				                      Community Engagement in Bwaise
				                    </Typography>
				                  </CardContent>
				                  <CardActions>
				                    <Button size="small" color="primary" onClick={onView}>
				                      View
				                    </Button>
				                    <Button size="small" color="primary">
				                      Edit
				                    </Button>
				                  </CardActions>
				                </Card>
		                </Grid>
								  

						<Grid item  xs={12} sm={6} md={4}>
				                <Card className={classes.card}>
				                	<CardHeader

							        title="Sensitization"
							        subheader="April 19, 2021"
							      />
				                  <CardMedia
				                    className={classes.cardMedia} 
				                     component="img"
				                    src={imagetwo}
				                    title="Image title"
				                  />
				                  <CardContent className={classes.cardContent}>
				                    <Typography>
				                      Educating community members about air quality
				                    </Typography>
				                  </CardContent>
				                  <CardActions>
				                    <Button size="small" color="primary">
				                      View
				                    </Button>
				                    <Button size="small" color="primary">
				                      Edit
				                    </Button>
				                  </CardActions>
				                </Card>
		                </Grid>		


						<Grid item  xs={12} sm={6} md={4}>
				                <Card className={classes.card}>
				                	<CardHeader

							        title="AirQo Team in the Field"
							        subheader="April 29, 2021"
							      />
				                  <CardMedia
				                    className={classes.cardMedia} 
				                     component="img"
				                    src={imagethree}
				                    title="Image title"
				                  />
				                  <CardContent className={classes.cardContent}>
				                    <Typography>
				                      
				                    </Typography>
				                  </CardContent>
				                  <CardActions>
				                    <Button size="small" color="primary">
				                      View
				                    </Button>
				                    <Button size="small" color="primary">
				                      Edit
				                    </Button>
				                  </CardActions>
				                </Card>
		                </Grid>			                						  
						<Grid item  xs={12} sm={6} md={4}>
				                <Card className={classes.card}>
				                	<CardHeader

							        title="Kyebando"
							        subheader="April 23, 2021"
							      />
				                  <CardMedia
				                    className={classes.cardMedia} 
				                    component="img"
				                    src={imagefour}
				                    title="Image title"
				                  />
				                  <CardContent className={classes.cardContent}>
		
				                    <Typography>
				                      Rubbish in where it is not supposed to be 
				                    </Typography>
				                  </CardContent>
				                  <CardActions>
				                    <Button size="small" color="primary">
				                      View
				                    </Button>
				                    <Button size="small" color="primary">
				                      Edit
				                    </Button>
				                  </CardActions>
				                </Card>
		                </Grid>
								  

						<Grid item  xs={12} sm={6} md={4}>
				                <Card className={classes.card}>
				                	<CardHeader

							        title="Around HARED kireka"
							        subheader="April 24, 2021"
							      />
				                  <CardMedia
				                    className={classes.cardMedia} 
				                     component="img"
				                    src={imagefive}
				                    title="Image title"
				                  />
				                  <CardContent className={classes.cardContent}>
			
				                    <Typography>
				                      Heavy traffic at kireka
				                    </Typography>
				                  </CardContent>
				                  <CardActions>
				                    <Button size="small" color="primary">
				                      View
				                    </Button>
				                    <Button size="small" color="primary">
				                      Edit
				                    </Button>
				                  </CardActions>
				                </Card>
		                </Grid>		


						<Grid item  xs={12} sm={6} md={4}>
				                <Card className={classes.card}>
				                	<CardHeader

							        title="Mpererwe Kitenzi road"
							        subheader="April 20, 2021"
							      />
				                  <CardMedia
				                    className={classes.cardMedia} 
				                     component="img"
				                    src={imagesix}
				                    title="Image title"
				                  />
				                  <CardContent className={classes.cardContent}>
				                    <Typography>
				                      Bad road too much dust
				                    </Typography>
				                  </CardContent>
				                  <CardActions>
				                    <Button size="small" color="primary">
				                      View
				                    </Button>
				                    <Button size="small" color="primary">
				                      Edit
				                    </Button>
				                  </CardActions>
				                </Card>
		                </Grid>			                						  
								
			
								

					
					</Grid>

				</Container>
				</div>
		
		</>
		);
}