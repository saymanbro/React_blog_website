import React from 'react';
import './Home.css';
import {Blog_data} from './Blog_data.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {netflix_series} from './Blog_data.js';
import Typed from 'react-typed';
import SecondCompo from '../SecondComponent/SecondCompo';
const useStyles = makeStyles({
    root: {
      maxWidth: 450,
      minWidth:200,
     
    },
    media: {
      height: 110,
    },
  });
const Home = () => {
    const classes = useStyles();
    return (
     <>
            <div className='main_container'>
           
           <div className="blog_heading">
               <h1>Improve Your Self <br/> Knowing Updates</h1> 
              
           </div>
           <div className="netflix_series">
           <Typography gutterBottom variant="h5" className='text-center text-white pt-3' component="h2">
                            <Typed
                            strings={['Top 5 Netflix Series',
                                       'Watch Now'
                          ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                            />
                            </Typography>
           <div className="series_col">
            
                  {
                      netflix_series.map((img,index) =>{
                          return(
                            <div key={index} className="series">
                               <img src={img.img} alt=""/>
                                </div>
                          )
                      })
                  }
              </div>
           

               
               
           </div>
           <div className="article_div">
             
                  {
                     Blog_data.map((img,index)=>{
                         return(
                           <div className="article_box">
                                <Card key={index} className={classes.root}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image={img.img}
                                title="Contemplative Reptile"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h6" color="primary" component="h2">
                                 {img.title}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions>                           
                              <Button size="small" color="secondary">
                                Learn More
                              </Button>
                            </CardActions>
                          </Card>
                           </div>
                         );
                     })
                  }
             
           </div>

       </div>
     <SecondCompo/>
       </>
      
    );
};

export default Home;