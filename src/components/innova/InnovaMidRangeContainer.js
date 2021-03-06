import React, {Component} from 'react';
import Data from '../data/innova-discs'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const buttonStyle = {
    width: '100%',
    minHeight: '56px',
    fontSize: '1.55em'
}

const strongStyle = {
    paddingLeft: '10px'
}

const ulStyle = {
    padding: '0'
}

const InnovaMidRangeContainer = ({ match }) => {
    const discData = Data;
    return (
        <div>
            <ul>
                { discData.map( (disc, i) => {
                    if (disc.speed <= 5 && disc.speed > 3) {
                        return <li key={i}><Button style={buttonStyle} component={Link} to={`${match.url}:${disc.discName}`}
                                                   discname={disc.discName}>{disc.discName}<strong>-{disc.speed}</strong></Button></li>
                    }
                })
                }
            </ul>
        </div>
    );
}


export default InnovaMidRangeContainer;