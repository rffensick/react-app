import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {increment} from "./../../AC";

class Counter extends Component {

  static propTypes = {
    counter: PropTypes.number 
  }

  handleIncrement = () => {
    this.props.dispatch(increment());
  }

  render() {
    return (
      <div>
        <h2> {this.props.counter} </h2>
        <button onClick={this.handleIncrement} >Increment</button>
      </div>
    );  
  }

}

function mapStateProps(state) {
  return {
    counter: state.count
  }
}

const decorator = connect(mapStateProps);

export default decorator(Counter);