import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const InnovaTypeContainer = ({ match }) => {
        const discTypes = ["/driver", "/fairway", "/mid-range", "/putter"];
        return (
            discTypes.map( (discType, i) => {
                return <Button key={i} disctype={discType.substring(1)} component={Link} to={`/innova${discType}`} variant="contained" color="primary">{discType.substring(1)}
                </Button>
            })
        );
}


export default InnovaTypeContainer;
