import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  listOfPizzas = () => {
    return this.props.pizzas.map((pizza, index) => 
    <Pizza  onEditPizza={this.props.onEditPizza} 
            key={index} 
            pizza={pizza} />)
  }
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.listOfPizzas()
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
