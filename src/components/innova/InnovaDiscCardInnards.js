import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Media from 'react-media'

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2
    },
    imageHolder: {
        maxWidth: '100%',
        maxHeight: '500px'
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    statHolder: {
        width: '80%'
    },
    twoStats: {
        display: 'flex'
    },
    speed: {
        width: '50%',
        backgroundColor: '#BFECB3'
    },
    glide: {
        width: '50%',
        backgroundColor: '#FFCC66'
    },
    turn: {
        width: '50%',
        backgroundColor: '#B9DCFF'
    },
    fade: {
        width: '50%',
        backgroundColor: '#FFFF99'
    },
    statHolderHolder: {
        display: 'flex',
        justifyContent: 'center',
        minWidth: '40%'
    },
    largeQueryHolder: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    plasticsHolder: {
        maxWidth: '60%'
    },
    imgHolder: {
        maxWidth: '33%',
        marginTop: '1em'
    },
    descHolder: {
        maxWidth: '60%',
        marginTop: '1em'
    },
    descriptionsHolder: {
        display: 'flex'
    },
    marginTop: {
        marginTop: '1em'
    }
});

const DiscInnards = ( props ) => {
    const { classes, match, disc } = props;
    const imgUrl = require(`./images/${disc.flightPath}`)
        return (
            <div>
                <Media query="(max-width: 599px)"
                       render={() => {
                           return (
                               <div>
                                   <div className={classes.statHolderHolder}>
                                       <div className={classes.statHolder}>
                                           <div className={classes.twoStats}>
                                               <div className={classes.speed}>
                                                   <Typography variant="display4">{disc.speed}</Typography>
                                                   <Typography gutterBottom variant="headline">Speed</Typography>
                                               </div>
                                               <div className={classes.glide}>
                                                   <Typography variant="display4">{disc.glide}</Typography>
                                                   <Typography gutterBottom variant="headline">Glide</Typography>
                                               </div>
                                           </div>
                                           <div className={classes.twoStats}>
                                               <div className={classes.turn}>
                                                   <Typography variant="display4">{disc.turn}</Typography>
                                                   <Typography gutterBottom variant="headline">Turn</Typography>
                                               </div>
                                               <div className={classes.fade}>
                                                   <Typography variant="display4">{disc.fade}</Typography>
                                                   <Typography gutterBottom variant="headline">Fade</Typography>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div>
                                       <img className={classes.img} src={imgUrl} />
                                   </div>
                                   <div className={classes.descriptionsHolder}>
                                       <Paper className={classes.descriptionHolder}>
                                        <Typography gutterBottom variant='title'>{disc.description}</Typography>
                                       </Paper>
                                       <Paper className={classes.typographyHolder}>
                                           <Typography gutterBottom variant="body2"><strong>Rim Width:</strong> {disc.rimWidth}</Typography>
                                           <Typography gutterBottom variant="body2"><strong>Diameter:</strong> {disc.diameter}</Typography>
                                           <Typography gutterBottom variant="body2"><strong>Good for:</strong> {disc.choice}</Typography>
                                           <Typography gutterBottom variant="body2"><strong>Plastics:</strong> {disc.plastics}</Typography>
                                       </Paper>
                                   </div>
                               </div>
                           )
                        }
                       }
                       />
                <Media query="(min-width: 600px)"
                       render={() => {
                           return (
                               <div className={classes.largeQueryHolder}>
                                   <div className={classes.statHolderHolder}>
                                       <div className={classes.statHolder}>
                                           <div className={classes.twoStats}>
                                               <div className={classes.speed}>
                                                   <Typography variant="display4">{disc.speed}</Typography>
                                                   <Typography gutterBottom variant="headline">Speed</Typography>
                                               </div>
                                               <div className={classes.glide}>
                                                   <Typography variant="display4">{disc.glide}</Typography>
                                                   <Typography gutterBottom variant="headline">Glide</Typography>
                                               </div>
                                           </div>
                                           <div className={classes.twoStats}>
                                               <div className={classes.turn}>
                                                   <Typography variant="display4">{disc.turn}</Typography>
                                                   <Typography gutterBottom variant="headline">Turn</Typography>
                                               </div>
                                               <div className={classes.fade}>
                                                   <Typography variant="display4">{disc.fade}</Typography>
                                                   <Typography gutterBottom variant="headline">Fade</Typography>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <Paper className={classes.plasticsHolder}>
                                       <div className={classes.marginTop}>
                                           <Typography gutterBottom variant="display1"><strong>Rim Width:</strong> {disc.rimWidth}</Typography>
                                           <Typography gutterBottom variant="display1"><strong>Diameter:</strong> {disc.diameter}</Typography>
                                           <Typography gutterBottom variant="display1"><strong>Good for:</strong> {disc.choice}</Typography>
                                           <Typography gutterBottom variant="display1"><strong>Plastics:</strong> {disc.plastics}</Typography>
                                       </div>
                                   </Paper>
                                   <div className={classes.descHolder}>
                                       <Typography gutterBottom variant="display2"><strong>Description:</strong> {disc.description}</Typography>
                                   </div>
                                   <div className={classes.imgHolder}>
                                        <img className={classes.img} src={imgUrl} />
                                   </div>
                               </div>
                           )
                       }
                       }
                />
            </div>
        );
}

DiscInnards.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiscInnards);