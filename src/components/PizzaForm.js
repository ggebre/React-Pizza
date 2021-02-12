import React from "react"

const PizzaForm = (props) => {
  
  const handleChange = (event) => {
    const target = event.target 
    let value = target.type == 'checkbox' ? target.checked : target.value 
    const name = target.name 
    if (value === 'vegetarian') {
      value = true
    } 
    if(value === 'Not Vegetarian'){
      value = false 
    }
    props.onInputChange({[name]: value})
  }
  
  return(
      <div className="form-row">
        <div className="col-5">
            <input name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                props.pizza.topping 
                
              } onChange={handleChange}/>
        </div>
        <div className="col">
          <select name="size" value={props.pizza.size } onChange={handleChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Vegetarian" checked={props.pizza.vegetarian} onChange={handleChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="vegetarian" value="Not Vegetarian" checked={!props.pizza.vegetarian} onChange={handleChange}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.onEditFormSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
