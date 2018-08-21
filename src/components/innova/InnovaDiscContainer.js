import React, {Component} from 'react';
import Data from '../data/innova-discs'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    media: {
        height: 140,
    },
    pos: {
        marginBottom: 12,
    },
};

const InnovaDiscContainer = ( props ) => {
    const { classes } = props;
    const { match } = props;
    const discData = Data;
    const matchDiscName = match.params.id.substring(1);
    const disc = discData.find( disc => disc.discName === matchDiscName)
    const imgUrl = require(`./images/${disc.flightPath}`)
    return (
        <Card className={classes.card}>
            <CardContent>
                <CardMedia
                    className={classes.media}
                    image={imgUrl}
                    title={disc.discName}
                />
                <Typography color='textSecondary' variant='display3'>
                    {disc.discName}
                </Typography>
                <h2>{disc.description}</h2>
                <h2>{disc.diameter}</h2>
                <h2>{disc.rimWidth}</h2>
                <h2>{disc.plastics}</h2>
                <h2>{disc.choice}</h2>
                <h2>{disc.flightPath}</h2>
                <h2>{disc.speed}</h2>
                <h2>{disc.glide}</h2>
                <h2>{disc.turn}</h2>
                <h2>{disc.fade}</h2>
            </CardContent>
        </Card>
    )
}

InnovaDiscContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InnovaDiscContainer);