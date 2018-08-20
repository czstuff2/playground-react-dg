import React, {Component} from 'react';
import InnovaTypeContainer from "./InnovaTypeContainer";
import InnovaDriverContainer from './InnovaDriverContainer'
import InnovaFairwayContainer from './InnovaFairwayContainer'
import InnovaMidRangeContainer from './InnovaMidRangeContainer'
import InnovaPutterContainer from './InnovaPutterContainer'
import InnovaDiscContainer from './InnovaDiscContainer'

// import route Components here
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

const InnovaContainer = ({ match }) => {
        return (
            <div>
                <h2>Select a Disc Type:</h2>
                <InnovaTypeContainer/>
                <div>
                    <Route exact path={`${match.path}/driver`} component={InnovaDriverContainer}/>
                    <Route exact path={`${match.path}/fairway`} component={InnovaFairwayContainer} />
                    <Route exact path={`${match.path}/mid-range`} component={InnovaMidRangeContainer} />
                    <Route exact path={`${match.path}/putter`} component={InnovaPutterContainer} />
                    <Route path={`${match.url}/driver:id`} component={InnovaDiscContainer} />
                    <Route path={`${match.url}/fairway:id`} component={InnovaDiscContainer} />
                    <Route path={`${match.url}/mid-range:id`} component={InnovaDiscContainer} />
                    <Route path={`${match.url}/putter:id`} component={InnovaDiscContainer} />
                </div>
            </div>
        );
}


export default InnovaContainer;
