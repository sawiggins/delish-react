import React from 'react';
import {formatPrice} from '../helpers'

class FlavorCard extends React.Component {
    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
    
    render () {
        return (
            <div className="flavorCard">
                <img alt={this.props.flavors.name} src={this.props.flavors.source}/>
                <div className="flavorCardText">    
                    <h3>{this.props.flavors.name}</h3>
                    <p>{formatPrice(this.props.flavors.price)}</p>
                </div>
                <button onClick={this.handleClick}>Add to Order</button>
            </div>
        );
    }
}

export default FlavorCard;