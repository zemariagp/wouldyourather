import React, { Component } from 'react'


export class CreateQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionA: "",
      optionB: "",
      category: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  formHandler = async e => {
    e.preventDefault();
    
    try {
      await 
      //this.props.history.push(`/`);
    } catch (error) {
      console.log(error);
    }
  };



  render() {
    return (
      <div>
        <form onSubmit={this.formHandler}>
          <label htmlFor="optionA">optionA</label>
          <input
            type="text"
            id="optionA"
            name="optionA"
            onChange={this.handleChange}
          />

          <label htmlFor="optionB">optionB</label>
          <input
            type="text"
            id="optionB"
            name="optionB"
            onChange={this.handleChange}
          />
           <label htmlFor="category">category</label>
          <select
            name="category"
            onChange={this.handleChange}
            value={this.state.category}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option>heart</option>
            <option>football</option>
            <option>wrench</option>
            <option>dolar</option>
          </select>

          <button>Create a dilema</button>
        </form>
      </div>
    );
  }
}
export default CreateQuestion
