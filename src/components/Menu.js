import React from 'react';
import FlavorCard from './FlavorCard'

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <h2>Flavors</h2>
                <ul className="flavorCardList">
                {Object.keys(this.props.flavors).map(key => 
                <FlavorCard 
                    key={key} 
                    flavors={this.props.flavors[key]} 
                    addToOrder={this.props.addToOrder}
                    index={key}
                    />)}
                </ul>
            </div>
        );
    }
}

export default Menu;