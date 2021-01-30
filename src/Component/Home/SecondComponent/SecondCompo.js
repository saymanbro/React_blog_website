import React from 'react';
import './SecondCompo.css'
// card style //
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardData } from './CardData';
import {articleData} from './CardData';
import * as ImIcons from 'react-icons/im';
import * as SiIcons from 'react-icons/si';
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

const SecondCompo = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    return (
      <>
        <div className='second_article_container'>
                  {/* Americas Article */}
        
           <div className="america_article">
                    {
                        CardData.map((data, index) =>{
                            return(
                               <div className="usa_article">
                                    <Card key={index}className={classes.root}>
                                <CardHeader
                                  avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                      R
                                    </Avatar>
                                  }
                                  action={
                                    <IconButton aria-label="settings">
                                      <MoreVertIcon />
                                    </IconButton>
                                  }
                                  title="Shrimp and Chorizo Paella"
                                  subheader="September 14, 2016"
                                />
                                <CardMedia
                                  className={classes.media}
                                  image={data.img}
                                  title="Paella dish"
                                />
                                <CardContent>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                   {data.subTitle}
                                  </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                  <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                  </IconButton>
                                  <IconButton aria-label="share">
                                    <ShareIcon />
                                  </IconButton>
                                  <IconButton
                                    className={clsx(classes.expand, {
                                      [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                  >
                                    <ExpandMoreIcon />
                                  </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                  <CardContent>
                                   <Typography>
                                       {data.description}
                                   </Typography>
                                  </CardContent>
                                </Collapse>
                              </Card>
                               </div>
                            );
                        })
                    }        

            </div>
                  

                 {/* Hollywood New Article */}

            <div className="hollywood_article">
                {
                    articleData.map((hollywood, index) =>{
                        return(
                            <div className="hollyArticle">
                                <img src={hollywood.img} alt=""/>
                                <small>{hollywood.title}</small>
                            </div>
                        );

                    })
                }

            </div>

        </div>
        
                {/* Footer */}

                <div className="footer_section">
                <div className="footer_left_col left_col">
                    <h2>Get In Touch</h2>
                  <div className="input_box">
                  <input type="text" placeHolder='Name' className='input_filed'/> <br/>
                    <input type="text" placeHolder='Email' className='input_filed'/> <br/>
                    <input type="message" placeHolder='Message' className='input_filed'/><br/>
                    <button className="send_btn">Send</button>
                  </div>
                </div>
                <div className="footer_right_col right_col">
                <h4>Stay Connected With</h4> 
                   <div className="social_icon">
                  
                   <i><ImIcons.ImYoutube/></i>
                      <i><SiIcons.SiInstagram/></i>
                      <i><ImIcons.ImFacebook2/></i>
                   </div>
                      <footer>Copy right &copy; {new Date().getFullYear()} Developed by Sayman</footer>
                </div>
          </div>
          </>
    );
};

export default SecondCompo;