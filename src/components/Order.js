import React from 'react';
import { formatPrice } from '../helpers'

class Order extends React.Component {
    renderOrder = key => {
        const flavor = this.props.flavors[key];
        const count = this.props.order[key];
        return <li key={key}>
            <div className="orderFlavor">{count}&nbsp;&nbsp;&nbsp;{flavor.name}</div>
            <div className="orderPrice">{formatPrice(count * flavor.price)}</div>
        </li>;
        
    };
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const flavors = this.props.flavors[key];
            const count = this.props.order[key];
            return prevTotal + (count * flavors.price);
        }, 0);

        return (
            <div className="order">
                <h2>Your Order</h2>
                <ul>
                      {orderIds.map(this.renderOrder)}
                </ul>
                <p className="total">Total: {formatPrice(total)}</p>
            </div>
            
        );
    }
}

export default Order;