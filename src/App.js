import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    pizza: {
      vegetarian: "",
      size: "",
      topping: ""
    }, 
    
    
  }
  onEditPizza = (pizza) => {
    // populate form with this pizza values 
    this.setState({pizza})
  }
  onEditFormSubmit = () => {

    const id = this.state.pizza.id 
    if (id){
      // update fetch!!!
      this.updatePizza(id)
    }
    this.fetchPizzas()
  }
  onInputChange = (pizza) => {
    this.setState({
      pizza: {...this.state.pizza, ...pizza}
    })
  }
  componentDidMount() {
    this.fetchPizzas()
  } 
  updatePizza = (id) => {
    fetch("http://localhost:3000/pizzas/"+`${id}`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.pizza)
    })
      .then(resp => resp.json())
      .then(pizza => this.setState({
        pizza: {
          topping: "",
          size: 'Small',
          vegetarian: false
        }
      }))
  }
  fetchPizzas = () => {
    fetch("http://localhost:3000/pizzas")
    .then(resp => resp.json())
    .then(pizzas => this.setState({pizzas}))
  }
  render() {
    
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizza={this.state.pizza}
          onEditFormSubmit={this.onEditFormSubmit}
          onInputChange={this.onInputChange}
          onEditFormSubmit = {this.onEditFormSubmit}
          />
        <PizzaList 
          pizzas={this.state.pizzas}
          onEditPizza={this.onEditPizza}/>
      </Fragment>
    );
  }
}

export default App;
