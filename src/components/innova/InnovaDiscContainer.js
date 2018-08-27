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

import Grid from './InnovaDiscCardInnards'

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
        height: 520,
    },
    pos: {
        marginBottom: 12,
    },
    divHeading: {
        marginTop: 15
    },
    align: {
        justifyContent: 'center',
        textAlign: 'center',

    }
};

const InnovaDiscContainer = ( props ) => {
    const { classes } = props;
    const { match } = props;
    const discData = Data;
    const matchDiscName = match.params.id.substring(1);
    const disc = discData.find( disc => disc.discName === matchDiscName)
    return (
        <div className={classes.divHeading}>
            <Typography gutterBottom variant="display2">
                {disc.discName}
            </Typography>
            <Grid className={classes.align} disc={disc}>{disc.description}</Grid>
        </div>
    )
}

InnovaDiscContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InnovaDiscContainer);