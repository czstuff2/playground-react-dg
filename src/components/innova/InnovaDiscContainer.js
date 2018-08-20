import React, {Component} from 'react';
import Data from '../data/innova-discs'


const InnovaDiscContainer = ({ match }) => {
    const discData = Data;
    const matchDiscName = match.params.id.substring(1);
    const disc = discData.find( disc => disc.discName === matchDiscName)
    return (
        <div>
            <h1>{disc.discName}</h1>
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
        </div>
    )
}


export default InnovaDiscContainer;