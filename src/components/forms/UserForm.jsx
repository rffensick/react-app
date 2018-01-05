import React, { Component } from "react";

export default class UserForm extends Component {

  state = {
    username: ''
  }
  
  clickInput = (e) => {
    this.setState({
      username: e.target.value
    });

    if (e.target.value.length > 10) {
      this.setState({
        username: 'enter current name'
      });
      e.target.style = 'outline: 1px solid red';
    } else {
      e.target.style = '';
    }
  } 

  render() {
    return(
      <div className="search">
        <label htmlFor="search">
          Поиск статьи
            <input type="text" value={this.state.username} name="search" className="form-control" onChange={this.clickInput} />
        </label>
      </div>
    );
  }

}