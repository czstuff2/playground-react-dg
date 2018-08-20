import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

function ManufacturerButton(props) {
    const { classes } = props;
    return (
        <div>
            <Button component={Link} to={props.linkTo} variant="contained" color="primary" className={classes.button}>
                {props.name}
                <DeleteIcon className={classes.rightIcon}/>
            </Button>
        </div>
    );
}

ManufacturerButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManufacturerButton);