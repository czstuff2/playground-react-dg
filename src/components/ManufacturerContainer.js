import React, {Component} from 'react';
import Data from './data/manufacturers'
import swal from 'sweetalert'
import ManufacturerButton from './ManufacturerButton'

class ManufacturerContainer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const manuData = Data.manufacturers;

        return (
            <div>
                <h1>Select a Manufacturer</h1>
                { manuData.map( (item, i) => {
                    return <ManufacturerButton linkTo={item.linkTo} key={i} name={item.name}></ManufacturerButton>
                    })
                }
            </div>
        );
    }
}

export default ManufacturerContainer;
