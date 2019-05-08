import React from 'react';
import Menu from './Menu';
import Order from './Order';
import flavorList from '../flavors';


class App extends React.Component {
  state = {
    flavors: {},
    order: {}
  }
  componentDidMount() {
    // take copy of state
    const flavors = { ...this.state.flavors};
    // add new flavors
    this.setState({flavors: flavorList})
  }

  addToOrder = key => {
    const order = { ...this.state.order};
    order[key]= order[key] + 1 || 1;
    this.setState({order});
  }
  
  render () {
    return (
      <div className="app">
        <Menu flavors={this.state.flavors} addToOrder={this.addToOrder}/>
        <Order flavors={this.state.flavors} order={this.state.order}/>
      </div>
    );
  }
}

export default App;